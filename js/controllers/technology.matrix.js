angular.module('Hansaton')

.controller('TechnologyMatrixController', function ($scope, MATRIX_SITUATIONS, MATRIX_RATINGS, PERFORMANCE_LEVELS) {
	$scope.situations = MATRIX_SITUATIONS;
	$scope.ratings = MATRIX_RATINGS;
	$scope.levels = PERFORMANCE_LEVELS;
	$scope.currLevel = 2;
	$scope.levelIndicies = { 2: 0, 3: 1, 5: 2, 7: 3, 9: 4};
	$scope.active = [];
	for (var i = 0; i < $scope.situations.length; i++) {
		$scope.active[i] = true;
	}
});
