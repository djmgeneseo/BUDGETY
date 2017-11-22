// ***************** BUDGET CONTROLLER *****************
var budgetController = (function() {
	
    
	
})();


// ***************** UI CONTROLLER *****************
var UIController = (function() {
	
	return {
      getInput: function() {
          return {
          // will be either income or expenses
          type: document.querySelector('.add__type').value,
          description: document.querySelector('.add__description').value,
          value: document.querySelector('.add__value').value
          };
      }  
    };

})();

// ***************** GLOBAL CONTROLLER *****************
var controller = (function(budgetCtrl, UICtrl) {
	
    var ctrlAddItem = function() {
        console.log("add item entered");
        // 1. Get field input data
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI

    };
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(evt) {
        if (evt.keyCode === 13 || evt.which === 13) {
            ctrlAddItem();
            
        }
    });
    
})(budgetController, UIController);