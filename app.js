
angular.module('app', [])
  .controller('MainController', ['$http', '$window', 
    function ($http, $window) {

    var vm = this;

    $http.get('graphics.json')
      .then(function (data) {
        vm.items = data;
        checkColumns();
      });

    function checkColumns() {
      if (vm.items) {
          calculateColumns(2);
      }
    }

    //screenSize.when('xs,sm,md,lg', checkColumns);

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
