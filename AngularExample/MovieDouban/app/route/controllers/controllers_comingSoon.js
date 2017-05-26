/**
 * Created by zheng on 2017/5/17.
 * Js-Type : index
 * Last Modefiend time: 2017/5/17 14:06
 */

(function (angular) {
	//创建热映排行模块
	var topModule = angular.module('moviecat.comingSoon',['ngRoute']);
	topModule.config(['$routeProvider', function ($routeProvider) {

		$routeProvider.when('/:category/:page',{
			templateUrl: 'route/view/catView.html',
			controller: 'ComingSoon'
		});
	}]);
	topModule.controller('ComingSoon',['$scope',function ($scope) {
		$scope.title = "即将上映333333";

	}]);
})(angular);


