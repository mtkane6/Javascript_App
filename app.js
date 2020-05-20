var budgetController = (function() {

})();


var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // "inc" or "exp"
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
            
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }


})();

var Controller = (function(budgetCtrl, UIContl) {
    var setUpEventListeners = function() {
        var DOMstrings = UIContl.getDOMstrings();
        document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which == 13) {
                ctrlAddItem();
            }
        });
    };
    

    var ctrlAddItem = function() {
        // get input data
        var input = UIContl.getInput();
        console.log(input);
        // add item to budget controller
        // add item to UI
        // calculate budget
        // display budget
    }

    return{
        init: function() {
            setUpEventListeners();
        }
    }
})(budgetController, UIController);

Controller.init();