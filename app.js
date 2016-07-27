
angular.module('app', [])
  .controller('MainController', ['$http', '$window', 
    function ($http, $window) {

    var vm = this;

    $http.get('experiments.json')
      .then(function (data) {
        vm.items = data;
        calculateColumns(2);
      });

    function calculateColumns(cols) {
      vm.columnCount = cols;
      vm.columns = [];
      var itemsPerColumn = Math.ceil(vm.items.data.length / vm.columnCount);
      for (var i = 0; i < vm.items.data.length; i += itemsPerColumn) {
        var col = { start: i, end: Math.min(i + itemsPerColumn, vm.items.data.length) };
        vm.columns.push(col);
      }
    }
  }])
  .filter('slice', function () {
    return function (arr, start, end) {
      return arr.slice(start, end);
  };
});
