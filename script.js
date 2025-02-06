import { display_history, clear_history } from "./util/history.js";
var display_text = document.getElementById('display');

var expression;
// var display_history_div = document.getElementById('display_history');
// var display_history_content = document.getElementById('history_content');
display_text.value = '';
var operand1 = null, operand2 = null, operator = null, ans = null;
const pi = 3.14;
var count = 1;

function handleButtonClick(parent_element_id, event_type, element_class, callback) {
    document.getElementById(parent_element_id).addEventListener(event_type, (e) => {
        if (e.target.classList.contains(element_class)) {
            callback(e);
        }
    });
}

// function load_history() {
//     var display_history_div = document.getElementById('display_history');
//     var display_history_content = document.getElementById('history_content');

//     if (display_history_div.style.display === 'block') {
//         display_history_content.innerHTML = '';

//         for (let i = 0; i < localStorage.length; i++) {
//             let key = localStorage.key(i);
//             let temp = localStorage.getItem(key);

//             let p = document.createElement('p');
//             p.textContent = temp;
//             display_history_content.appendChild(p);
//         }
//     }
// }

// handling number entry
handleButtonClick('calc_content', 'click', 'data-number', (e) => {
    display_text.value += e.target.value;
    if (operator != null) {
        operand2 = display_text.value;
    }
});

// handling operation entry
handleButtonClick('calc_content', 'click', 'data-opreations', (e) => {
    display_text.value += e.target.value;
    // operand1 = display_text.value;
    // operator = e.target.value;
    // display_text.value = '';
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
    // display_text.value = ans;
    // localStorage.setItem(count.toString(),operand1+" "+operator+" "+operand2+" = "+ans);
    // count++;  
});

// handling eqaul operation
handleButtonClick('calc_content', 'click', 'eqals', (e) => {
    /*switch (operator) {
        case "+":
            ans = Number(operand1) + Number(operand2);
            break;
        case "-":
            ans = Number(operand1) - Number(operand2);
            break;
        case "*":
            ans = Number(operand1) * Number(operand2);
            break;
        case "/":
            ans = Number(operand1) / Number(operand2);
            break;
        case "%":
            ans = Number(operand1) % Number(operand2);
            break;
        default:
            ans = "Invalid Operator";
    }
    display_text.value = ans;*/
    console.log(display_text.value)
    localStorage.setItem(count.toString(), operand1 + " " + operator + " " + operand2 + " = " + ans);
    count++;
});

// clear the text field
handleButtonClick('calc_content', 'click', 'clear', (e) => {
    display_text.value = '';
    operand1 = null;
    operand2 = null;
    operator = null;
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
