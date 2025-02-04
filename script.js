var display_text = document.getElementById('display');
var display_history_div = document.getElementById('display_history'); 
var display_history_content=document.getElementById('history_content');
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
function load_history() {
    var display_history_div = document.getElementById('display_history'); // Get the div

    if (display_history_div.style.display === 'block') { // Check if it's visible

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let temp = localStorage.getItem(key);

            let p = document.createElement('p'); // Create <p> tag
            p.textContent = temp; // Set text content to retrieved value
            display_history_div.appendChild(p); // Append <p> to the div
        }
    }
}

document.getElementById('btn-history').addEventListener('click', (e) => {
    // Use string ID
    if(display_history_div.style.display === 'none' || display_history_div.style.display === '') {
        display_history_div.style.display = 'block';
        load_history();
    }
    else{
        display_history_div.style.display = 'none';
    }
        
});
