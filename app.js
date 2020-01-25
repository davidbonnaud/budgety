// BUDGET CONTROLLER
var budgetController = (function() {

  // some code

})();

// UI CONTROLLER
var UIController = (function() {

  // some code

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    // 1. get field input data
    
    // 2. add item to the budget controller

    // 3. add item to the ui

    // 4. calculate budget

    // 5. Display the budget on the ui

    console.log("It works.");
  }

  document.querySelector('.add__btn').addEventListener('click', function() {
    ctrlAddItem();
  });

  document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);