angular.module('Hansaton')

.controller('OverviewController', function ($scope, $state, $stateParams, OVERVIEW_SECTIONS, find) {
	$scope.$state = $state;
	$scope.sections = OVERVIEW_SECTIONS;
	$scope.section = find($scope.sections, 'state', $stateParams.topic);
	$scope.hasNavbar = localStorage.getItem('isUserVisitor') === 'false';

	$scope.currentSection = $stateParams.topic;

});
