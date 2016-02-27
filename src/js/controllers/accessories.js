angular.module('Hansaton')

.controller('AccessoriesController', function ($scope, $rootScope, $state, ACCESSORY_FEATURES, find) {
	$scope.navItems = [
		{
			state: 'accessories.overview',
			stateParams: { accessory: 0 },
			imageActive: 'images/accessories-products.png',
			imageInactive: 'images/accessories-products-white.png'
		},
		{
			state: 'accessories.feature',
			stateParams: { feature: 'TV' },
			imageActive: 'images/accessories-tv.png',
			imageInactive: 'images/accessories-tv-white.png'
		},
		{
			state: 'accessories.feature',
			stateParams: { feature: 'remote' },
			imageActive: 'images/accessories-remote.png',
			imageInactive: 'images/accessories-remote-white.png'
		},
		{
			state: 'accessories.feature',
			stateParams: { feature: 'telephone' },
			imageActive: 'images/accessories-telephone.png',
			imageInactive: 'images/accessories-telephone-white.png'
		},
		{
			state: 'accessories.feature',
			stateParams: { feature: 'lecture' },
			imageActive: 'images/accessories-lecture.png',
			imageInactive: 'images/accessories-lecture-white.png'
		}
	];
	function setupNavbar() {
		$scope.onOverview = $state.includes('accessories.overview');

		$scope.onFeature = $state.includes('accessories.feature');
		$scope.title = $scope.onFeature ? find(ACCESSORY_FEATURES, 'state', $state.params.feature).name : 'Produktübersicht';
	}
	$rootScope.$on('$stateChangeSuccess', setupNavbar);
	setupNavbar();
});
