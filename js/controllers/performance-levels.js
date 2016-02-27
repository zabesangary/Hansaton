angular.module('Hansaton')

.controller('PerformanceLevelsController', function ($scope, $stateParams, PERFORMANCE_LEVELS, PERFORMANCE_ACTIVITIES, PERFORMANCE_TECHNOLOGIES, find) {
	$scope.levels = PERFORMANCE_LEVELS;
	$scope.activities = PERFORMANCE_ACTIVITIES;
	$scope.technologies = PERFORMANCE_TECHNOLOGIES;
	$scope.levelHeightLookup = { 4: 88, 8: 191, 12: 289, 16: 388, 20: 488 };
	$scope.currLevel = $stateParams.level;
	$scope.currLevelInfo = find(PERFORMANCE_LEVELS, 'level', $scope.currLevel);
	$scope.currLevelIndex = ({ 2: 0, 3: 1, 5: 2, 7: 3, 9: 4 })[$scope.currLevel];
	$scope.calloutHeightLookup = { 2: -30, 3: 50, 5: 150, 7: 250, 9: 300 };
	$scope.technologySelected = null;
	$scope.technologyClick = function (technology) {
		if ($scope.technologySelected && $scope.technologySelected.name === technology.name) {
			$scope.technologySelected = null;
		} else {
			$scope.technologySelected = technology;
		}
	};
});
