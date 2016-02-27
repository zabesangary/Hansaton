angular.module('Hansaton')

.controller('AccessoriesFeatureController', function ($scope, $state, $stateParams, ACCESSORY_FEATURES, find) {
	$scope.feature = find(ACCESSORY_FEATURES, 'state', $stateParams.feature);
	$scope.accessories = $scope.feature.accessories;
	$scope.currentAccessory = 0;
	$scope.accessory = $scope.accessories[$scope.currentAccessory];

	if ($state.current.name != 'accessories.overview') {
		$('.topbar > div div:first-child a').removeClass('current');
	}

	$scope.prevAccessory = function () {
		$scope.currentAccessory--;
		if ($scope.currentAccessory < 0) {
			$scope.currentAccessory = $scope.accessories.length - 1;
		}
		$scope.accessory = $scope.accessories[$scope.currentAccessory];
	};
	$scope.nextAccessory = function () {
		$scope.currentAccessory++;
		if ($scope.currentAccessory >= $scope.accessories.length) {
			$scope.currentAccessory = 0;
		}
		$scope.accessory = $scope.accessories[$scope.currentAccessory];
	};
});
