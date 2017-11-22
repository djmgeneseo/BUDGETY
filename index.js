/* jshint browser: true */

// ***************** BUDGET CONTROLLER *****************
var budgetController = (function () {

    // function constructor
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // function constructor
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            ID = 0;

            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if ( type === 'inc') {
                newItem = new Income(ID, des, val);
            }

        }
    };

})();


// ***************** UI CONTROLLER *****************
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    // PUBLIC:
    return {
        getInput: function () {
            return {
                // will be either income or expenses
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

// ***************** GLOBAL CONTROLLER *****************
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (evt) {
            if (evt.keyCode === 13 || evt.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {

        // 1. Get field input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };
    
    // PUBLIC:
    return {
        init: function () {
            console.log("Application starts...now.");
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();
