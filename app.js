
angular.module('app', ['matchMedia'])
  .controller('MainController', ['$http', '$window', 'screenSize',
    function ($http, $window, screenSize) {

    var vm = this;

    $http.get('graphics.json')
      .then(function (data) {
        vm.items = data;
        checkColumns();
      });

    function checkColumns() {
      if (vm.items) {
        if (screenSize.is('xs,sm') && vm.columnCount != 1)
          calculateColumns(1);
        else if (screenSize.is('md,lg') && vm.columnCount != 2)
          calculateColumns(2);
      }
    }

    screenSize.when('xs,sm,md,lg', checkColumns);

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
