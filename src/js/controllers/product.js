angular.module('Hansaton')

.controller('ProductController', function ($rootScope, $scope, PRODUCTS, $stateParams, $state, find) {
	function setupRoutes() {
		$scope.designSelected = $state.includes('product.model');
		$scope.product = find(PRODUCTS, 'sref', $stateParams.product);
		if ($scope.designSelected) {
			$scope.design = find($scope.product.designs, 'sref', $state.params.design);
			if ($scope.design) {
				$scope.title = $scope.design.name;
			}
		} else {
			$scope.title = $scope.product.title;
		}
		$scope.designs = find(PRODUCTS, 'sref', $stateParams.product).designs;
		$scope.navItems = [];
		if ($scope.designSelected) {
			for (var i = 0; i < $scope.designs.length; i++) {
				var design = $scope.designs[i];
				$scope.navItems.push({
					state: 'product.model',
					stateParams: { design: design.sref },
					text: design.sref
				});
			}
		} else {
			for (var i = 0; i < PRODUCTS.length; i++) {
				var product = PRODUCTS[i];
				$scope.navItems.push({
					state: 'product.list',
					stateParams: { product: product.sref },
					imageActive: product.navImageActive,
					imageInactive: product.navImageInactive
				});
			}
		}
	}
	$rootScope.$on('$stateChangeSuccess', setupRoutes);
	setupRoutes();
});
