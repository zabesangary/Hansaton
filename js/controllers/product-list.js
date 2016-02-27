angular.module('Hansaton')

.controller('ProductListController', function ($scope, $stateParams, PRODUCTS, find) {
	$scope.product = find(PRODUCTS, 'sref', $stateParams.product); // Information about the currently displayed product
	$scope.currentFeature = -1; // -1 means the presentation has not been started, 0 or greater is a feature index (one less than the feature number)
});
