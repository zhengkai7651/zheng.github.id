/**
 * Created by zheng on 2017/5/17.
 * Js-Type : index
 * Last Modefiend time: 2017/5/17 14:06
 */

(function (angular) {
	'use strict';
	//创建热映排行模块
	var module = angular.module(
		'moviecat.movie_list', [
			'ngRoute',
			'moviecat.services.http'
		]);//设置路由配置路径 匹配信息等
	module.config(['$routeProvider', function($routeProvider) {
		//匹配电影列表
		$routeProvider.when('/:category/:page', {
			templateUrl: 'route/view/catView.html',
			controller: 'MovieListController'
		});
	}]);
	module.controller('MovieListController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',
		function($scope, $route, $routeParams, HttpService,AppConfig) {
			var count = AppConfig.pageSize; // 每一页的条数
			var page = parseInt($routeParams.page); // 当前第几页
			var start ;
			if(isNaN(page)){
				start = 0;
			}else {
				start = (page - 1) * count; // 当前页从哪开始
			}
			// 控制器 分为两步： 1. 设计暴露数据，2. 设计暴露的行为
			$scope.loading = true; // 开始加载
			$scope.subjects = [];
			$scope.title = '';
			$scope.totalCount = 0;	//总计多少条记录
			$scope.totalPages = 0;	//总共有多少页
			$scope.currentPage = page;	//当前页
			// 跨域请求
			HttpService.jsonp(
				AppConfig.listApiAddress + $routeParams.category,
				{ start: start, count: count ,q: $routeParams.q},
				function(data) {
					//console.log(data.subjects);
					$scope.title = data.title;
					$scope.subjects = data.subjects;
					$scope.totalCount = data.total;
					$scope.totalPages = Math.ceil($scope.totalCount / count);
					$scope.loading = false;
					$scope.$apply();//同步所有的数据模型
					// $apply的作用就是让指定的表达式重新同步
					console.log("总计页码===" +$scope.totalPages );
				});
			// 暴露一个上一页下一页的行为
			$scope.next = function(page) {
				console.log("======" + page);
				console.log("======" + $scope.totalPages);
				// 传过来的是第几页我就跳第几页
				// 一定要做一个合法范围校验
				if (page >= 1 && page <= $scope.totalPages) {
					$route.updateParams({page: page});
				} else {
					return;
				}
			};
		}
	]);
})(angular)


