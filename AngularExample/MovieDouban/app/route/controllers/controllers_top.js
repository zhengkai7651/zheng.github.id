/**
 * Created by zheng on 2017/5/17.
 * Js-Type : index
 * Last Modefiend time: 2017/5/17 14:06
 */

(function (angular) {
	//创建热映排行模块
	var topModule = angular.module('moviecat.topmovie',['ngRoute']);
	topModule.config(['$routeProvider', function ($routeProvider) {

		$routeProvider.when('/:category/:page',{
			templateUrl: 'route/view/catView.html',
			controller: 'TopMovie'
		});
	}]);
	topModule.controller('TopMovie',['$scope',function ($scope) {

		$scope.title = "热门榜单";
	}]);
})(angular);


