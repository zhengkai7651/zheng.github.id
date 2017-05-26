/**
 * Created by zheng on 2017/5/17.
 * Js-Type : index
 * Last Modefiend time: 2017/5/17 14:06
 */

(function (angular) {
	'use strict';
	//创建电影详情页面模块
	var detailModule = angular.module(
		'moviecat.details', [
			'ngRoute',
			'moviecat.services.http',
		]);//设置路由配置路径 匹配信息等
	detailModule.config(['$routeProvider', function($routeProvider) {
		//根据url请求头地址参数 匹配详情
		$routeProvider.when('/:detail/:id', {
			templateUrl: 'route/view/movie-details.html',
			controller: 'DetailsController'
		});
	}]);
	detailModule.controller('DetailsController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'$location',
		'AppConfig',
		function($scope, $route, $routeParams,HttpService,AppConfig) {
			$scope.movie_detail = {};
			var movie_id = $routeParams.id;
			console.log(movie_id);
			//var apiAddress = 'http://api.douban.com/v2/movie/subject/'+ '' + movie_id;
			HttpService.jsonp(AppConfig.detailApiAddress+movie_id,{}, function (data) {
				console.log(data);
				$scope.movie_detail = data;
				$scope.imageLarge = data.images.large;
				$scope.loading = false;
				$scope.$apply();
			});
		}
	]);
})(angular)






























