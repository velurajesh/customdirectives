var app = angular.module('mydirectiveModule', []);
app.directive('isolatedScopeWithTransclusion', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            tasks: '='
        },
        controller: function ($scope) {
            $scope.addTask = function () {
                if (!$scope.tasks) {
                    $scope.tasks = [];
                }
                $scope.tasks.push({
                    title: $scope.title
                });
            };
        },
        templateUrl: 'dirTemplate.html' 
    };
});