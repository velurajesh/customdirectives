var app = angular.module('stockMarketApp', []);
app.controller('MainCtrl', [function() {
    var self = this;
    self.stocks = [
      {name: 'Oracle', price: 100, previous: 220},
      {name: 'NetApp', price: 140, previous: 120},
      {name: 'S1', price: 110, previous: 110},
      {name: 'Apple', price: 400, previous: 420}
    ];

    self.getChange = function(stock) {
      return Math.ceil((
        (stock.price - stock.previous) / stock.previous) * 100);
    };
}]);

app.directive('stockWidget', [function() {
    return {
      templateUrl: 'stock.html',
      restrict: 'AE',
      scope: true
    };
  }]);

