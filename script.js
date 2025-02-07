import { display_history, clear_history } from "./util/history.js";
import { validateExpression } from './util/validate_exp.js';
import { evaluateFunctions } from './util/eval_advance_function.js';
import { evaluate } from './util/eval.js'
import { handleTheme } from './util/theme.js'
var theme = document.getElementById('checkbox');
var display_text = document.getElementById('display');
var expression;
display_text.value = '';
var operator = null, ans = null;
const pi = 3.14;
var count = 1;

function handleButtonClick(parent_element_id, event_type, element_class, callback) {
    document.getElementById(parent_element_id).addEventListener(event_type, (e) => {
        if (e.target.classList.contains(element_class)) {
            callback(e);
        }
    });
}

// handling number entry
handleButtonClick('calc_content', 'click', 'data-number', (e) => {
    display_text.value += e.target.value;
});

// theme change
handleButtonClick('calc-header', 'click', 'checkbox', handleTheme);
// handling operation entry
handleButtonClick('calc_content', 'click', 'data-opreations', (e) => {
    display_text.value += e.target.value;

});

// handling single operand operations
handleButtonClick('calc_content', 'click', 'data-opreations_so', (e) => {
    display_text.value += e.target.value;
    operator = e.target.value;
    switch (operator) {
        case "sin":
            break;
        case "cos":
            break;
        case "tan":
            break;
        case "sqrt":
            break;
        case "log":
            break;
        default:
            ans = "Invalid Operator";
    }
});

handleButtonClick('calc_content', 'click', 'data-opreations_sc', (e) => {
    if (e.target.value != '-') {
        e.target.value = '-';
        display_text.value += e.target.value;
    }
    else {
        e.target.value = '+';
    }

});

// handling eqaul operation
handleButtonClick('calc_content', 'click', 'eqals', (e) => {
    expression = validateExpression(display_text.value);
    expression = evaluateFunctions(expression);
    ans = evaluate(expression);
    display_text.value += e.target.value;
    display_text.value += ans;
    localStorage.setItem(count.toString(), display_text.value);
    count++;
});

// clear the text field
handleButtonClick('calc_content', 'click', 'clear', (e) => {
    display_text.value = '';
});

handleButtonClick('calc_content', 'click', 'back_space', (e) => {
    display_text.value = display_text.value.toString().replace(/.$/, '');

});


// clear history button
handleButtonClick('history_header', 'click', 'btn_clr_history', (e) => {
    clear_history();
});

// display or hide history section
document.getElementById('btn-history').addEventListener('click', (e) => {
    display_history();

});
