angular.module('Hansaton')

.controller('ProductModelController', function ($scope, $stateParams, PRODUCTS, find) {
	$scope.design = find(find(PRODUCTS, 'sref', $stateParams.product).designs, 'sref', $stateParams.design);
	$scope.currColor = $scope.design.colors[$stateParams.color];
	$scope.tabSelected = 'design';
});
