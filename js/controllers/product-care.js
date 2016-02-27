angular.module('Hansaton')

.controller('ProductCareController', function ($scope, $stateParams, CARE_TYPES, find) {
	$scope.types = CARE_TYPES;
	$scope.type = find($scope.types, 'state', $stateParams.type);
	$scope.title = $scope.type.name;
	$scope.currentProduct = 0;
	$scope.navItems = [];
	for (var i = 0; i < $scope.types.length; i++) {
		var type = $scope.types[i];
		$scope.navItems.push({
			state: 'product-care',
			stateParams: { type: type.state },
			imageActive: type.navImageActive,
			imageInactive: type.navImageInactive
		});
	}
});
