angular.module('Hansaton')

.directive('navbar', function ($state) {
  return {
    scope: {
      title: '=',
      backState: '=',
      backStateParams: '=',
      items: '='
    },
    templateUrl: 'navbar.html',
    link: function ($scope) {
      $scope.$state = $state;
    }
  };
});
