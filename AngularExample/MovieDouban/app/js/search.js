/**
 * Created by zheng on 2017/5/20.
 * Js-Type : index
 * Last Modefiend time: 2017/5/20 14:20
 */

(function (angular) {
	angular.module('moviecat.search',['ngRoute'])
		.directive('search',['$location','$route', function ($route) {
			return {
				scope:{},
				restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
				template: '<form class="navbar-form navbar-right" ng-submit="search"/>',
				replace: true,
				link: function ($scope,iElm,iAttrs,controller) {
					$scope.search_text = '';
					$scope.searchMovie = function () {
						$route.updateParams({q: $scope.search_text});
					}
				}

			}
		}]);
})(angular);



