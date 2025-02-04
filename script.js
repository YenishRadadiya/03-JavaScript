var display_text = document.getElementById('display');
display_text.value = '';
var operand1=null, operand2=null, operator = null, ans=null;
var count=1;

function handleButtonClick(parent_element_id, event_type, element_class, callback) {
    document.getElementById(parent_element_id).addEventListener(event_type, (e) => {
        if (e.target.classList.contains(element_class)) {
            callback(e);
        }
    });

}

handleButtonClick('calc_content', 'click', 'data-number', (e) => {
    display_text.value += e.target.value;
    if (operator != null) {
        operand2 = display_text.value;

    }
});

handleButtonClick('calc_content', 'click', 'data-opreations', (e) => {
    operand1 = display_text.value;
    operator = e.target.value;
    display_text.value = '';
});
handleButtonClick('calc_content', 'click', 'eqals', (e) => {
    switch (operator) {
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
    display_text.value = ans;
    localStorage.setItem(count.toString(),operand1+" "+operator+" "+operand2+" = "+ans);
    count++;
});

handleButtonClick('calc_content', 'click', 'clear', (e) => {
    display_text.value='';
    operand1=null;
    operand2=null;
    operator=null;
});

