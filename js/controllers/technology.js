angular.module('Hansaton')

.controller('TechnologyController', function ($scope, $state) {
	$scope.navItems = [
		{
			state: 'technology.performance-levels',
			stateParams: { level: 0 },
			imageActive: 'images/bars.png',
			imageInactive: 'images/bars-white.png'
		},
		{
			state: 'technology.matrix',
			imageActive: 'images/rating.png',
			imageInactive: 'images/rating-white.png'
		}
	];
	if ($state.includes('technology.performance-levels')) {
		$scope.title = 'Performance Level'
	} else if ($state.includes('technology.matrix')) {
		$scope.title = 'Technologie im Alltag';
	}
});
