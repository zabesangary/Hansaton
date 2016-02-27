angular.module('Hansaton')

.controller('MainController', function ($scope, $state) {
	$scope.visitorEnter = function () {
		localStorage.setItem('isUserVisitor', true);
		$state.go('overview', { topic: 'info' });
	};
	$scope.specialistEnter = function () {
		localStorage.setItem('isUserVisitor', false);
		$state.go('overview', { topic: 'info' });
	};
});
