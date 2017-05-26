'use strict';

// 应用主程序 入口
var app = angular.module('myApp', [	//载入其他模块
	'ngRoute',
	'moviecat.services.http',
	'moviecat.directives.auto_focus']);

// 为模块定义一些常量
app.constant('AppConfig', {
	pageSize: 10,
	listApiAddress: 'http://api.douban.com/v2/movie/',
	detailApiAddress: 'http://api.douban.com/v2/movie/subject/',
	movie_in_theaters: 'in_theaters',
	movie_coming_soon: 'coming_soon',
	movie_top250: 'top250'
});
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/:category/:page', {
		templateUrl: 'route/view/catView.html',
		controller: 'MovieListController'
	}).when('/:subject/:id', {
		templateUrl: 'route/view/movie-details.html',
		controller: 'DetailsController'
	}).otherwise({
		// 默认跳转到一个地址
		redirectTo: '/in_theaters/1'
	});
}]);
app.controller('SearchController', ['$scope', '$route', function ($scope, $route) {
	//电影搜索模块
	$scope.search_text = '';
	$scope.searchMovie = function () {
		console.log($scope.search_text);
		$route.updateParams({category: 'search', q: $scope.search_text});
	}
}]);
app.controller('DetailsController', [
	'$scope',
	'$route',
	'$routeParams',
	'AppConfig',
	function ($scope, $route, $routeParams, AppConfig) {
		$scope.movie_detail = {};
		var movie_id = $routeParams.id;
		console.log(movie_id);
		$http.jsonp(AppConfig.detailApiAddress + movie_id, {jsonpCallbackParam: 'movieDetail'});
		window.movieDetail = function (data) {
			console.log("details==========");
			console.log(data);
			$scope.movie_detail = data;
			$scope.imageLarge = data.images.large;
			$scope.loading = false;
			$scope.$apply();
		};
		//var apiAddress = 'http://api.douban.com/v2/movie/subject/'+ '' + movie_id;
		//HttpService.jsonp(AppConfig.detailApiAddress + movie_id, {}, function (data) {
		//	console.log(data);
		//	$scope.movie_detail = data;
		//	$scope.imageLarge = data.images.large;
		//	$scope.loading = false;
		//	$scope.$apply();
		//});
	}
]);

app.controller('MovieListController', [
	'$scope',
	'$route',
	'$routeParams',
	'$http',
	'HttpService',
	'AppConfig',
	function ($scope, $route, $routeParams, $http, HttpService, AppConfig) {
		// 控制器 分为两步： 1. 设计暴露数据，2. 设计暴露的行为
		$scope.loading = true; // 是否加载等待动画  初始加载


		var page = parseInt($routeParams.page); // 当前第几页
		if(angular.isDefined(page)){
			page = 1;
		}
		console.log("当前页====" + page);
		$scope.movieList = {
			title: '',
			count: AppConfig.pageSize, // 每一页的条数
			start: (page - 1) * this.count, // 当前页从哪开始
			totalCount: 0,		//总共有多少条数据
			totalPages: 0,		//总共有多少页
			currentPage: page,	//当前页
			subjects: []		//电影信息对象
		};


		console.log("type==="+$routeParams.category);
		//获取缓存json 将json字符串转化为json对象
		var movieData = angular.fromJson(localStorage.getItem('moiveData'));
		console.log("缓存json====" + movieData);
		if (movieData != "" && movieData != null) {
			console.log('获取缓存数据');
			$scope.movieList.title = movieData.title;
			$scope.movieList.subjects = movieData.subjects;
			$scope.movieList.totalCount = movieData.total;
			$scope.movieList.totalPages = Math.ceil(movieData.totalCount / $scope.movieList.count);
			$scope.loading = false;
			return;
		}
		// 跨域请求
		$http.jsonp( AppConfig.listApiAddress +
			$routeParams.category +
			'?callback=movie_list_cb&start=' +
			$scope.movieList.start + '&count=' + $scope.movieList.count + '&q=' + $routeParams.q,
			{jsonpCallbackParam: 'movie_list_cb'});
		window.movie_list_cb = function (data) {
			//console.log(data.subjects);
			//console.log($routeParams.category);
			////根据电影类型缓存JSON数据  angular.toJson(data) 将json转换成json字符串
			switch ($routeParams.category) {
				case AppConfig.movie_in_theaters:
					localStorage.setItem("in_theaters"+page, angular.toJson(data));
					break;
				case AppConfig.movie_coming_soon:
					localStorage.setItem("coming_soon"+page, angular.toJson(data));
					break;
				case AppConfig.movie_top250:
					localStorage.setItem("top250"+page, angular.toJson(data));
					break;
			}
			$scope.movieList.title = data.title;
			$scope.movieList.subjects = data.subjects;
			$scope.movieList.totalCount = data.total;
			$scope.movieList.totalPages = Math.ceil($scope.movieList.totalCount / $scope.movieList.count);
			$scope.loading = false;
			$scope.$apply();//同步所有的数据模型
		};
		//HttpService.jsonp(
		//	AppConfig.listApiAddress + $routeParams.category,
		//	{start: start, count: count, q: $routeParams.q},
		//	function (data) {
		//		//console.log(data.subjects);
		//		$scope.title = data.title;
		//		$scope.subjects = data.subjects;
		//		$scope.totalCount = data.total;
		//		$scope.totalPages = Math.ceil($scope.totalCount / count);
		//		$scope.loading = false;
		//		$scope.$apply();//同步所有的数据模型
		//		// $apply的作用就是让指定的表达式重新同步
		//		console.log("总计页码===" + $scope.totalPages);
		//	});
		// 暴露一个上一页下一页的行为
		$scope.next = function (page) {
			console.log("======" + page);
			// 传过来的是第几页我就跳第几页
			// 一定要做一个合法范围校验
			if (page >= 1 && page <= $scope.movieList.totalPages) {
				$route.updateParams({page: page});
			} else {
				return;
			}
		};
	}
]);

