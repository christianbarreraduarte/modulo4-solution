(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsMenuController', ItemsMenuController);

ItemsMenuController.$inject = ['$stateParams', 'items', 'elementos','MenuDataService'];
function ItemsMenuController($stateParams, items, elementos, MenuDataService) {
  var itemDetail = this;
  console.log('$stateParams.itemId dum:',$stateParams.itemId);
  var item = items.data[$stateParams.itemId];
  console.log('items.data dum:',items.data);
  itemDetail.name = item.name;
  itemDetail.short_name = item.short_name;
  itemDetail.id = item.id;


  var promise = MenuDataService.getItemsForCategory(itemDetail.short_name);
  promise.then(function (response) {
    itemDetail.elementos = response.data.menu_items;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
}

})();
