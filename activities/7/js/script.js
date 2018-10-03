var firstApp = angular.module('firstApp', []);

function toCapital(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    
}

firstApp.controller('FirstController', function($scope) {
  $scope.first = 'ash';
  $scope.last = 'KETCHUM';
  $scope.heading = 'Message: ';
  $scope.updateMessage = function() {
    $scope.message = 'Catch \'em all ' + toCapital($scope.first) +' '+ toCapital($scope.last) + '!';
  };
});