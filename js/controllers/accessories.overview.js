angular.module('Hansaton')

.controller('AccessoriesOverviewController', function ($scope, $state, $stateParams, ACCESSORIES, find) {
	$scope.feature = find(ACCESSORIES, 'state', $stateParams.feature);
	$scope.currentAccessory = $stateParams.accessory;
	$scope.accessories = ACCESSORIES;
	$scope.accessory = $scope.accessories[$scope.currentAccessory];

	if ($state.current.name === 'accessories.overview') {
		$('.topbar > div div:first-child a').addClass('current');
	}

});
