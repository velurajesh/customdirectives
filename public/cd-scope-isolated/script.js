var app = angular.module('mydirectiveModule', []);

app.directive('myIsolatedScope', function () {
    return { //DDO begin
        scope: {
            name: '=someOtherName',
            prof: '@xyzProf'
        },

        link: function($scope, $element, $attrs) {
            $scope.clickInsideMethod = function() {
              $scope.name = 'Jerry';
              $scope.prof = 'Actor';
            };
        },

        templateUrl: 'dirTemplate.html'
    }; //DDO end
});

app.controller('CustomersController', ['$scope', function ($scope) {
    var counter = 0;
    $scope.customer = {
        name: 'Ramesh',
        street: '20, MG Road, New Delhi',
        profession: 'Professor'
    };

    $scope.clickMethod = function(){
        $scope.customer = {
            name: 'Tom',
            street: '1220, West Windsor, NJ, USA',
            profession: 'Cartoon Character'
        };
    }
}]);