(function (angular) {
	'use strict';//严格模式 不允许使用一些不安全的语法
	// Your starting point. Enjoy the ride!

	//应用程序主函数 用老管理界面结构
	var todoApp = angular.module('todoApp', ['ngRoute','app.controllers.main']);//

	//路由配置
	todoApp.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/:status?',
			{
				controller: 'MainController',
				templeteUrl: 'main_templ'
			}).otherwise({ redirectTo: '/' });
	}]);


})(angular);
