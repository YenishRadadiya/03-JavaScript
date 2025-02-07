function prec(c) {
    if (c === '^')
        return 3;
    else if (c === '/' || c === '*' || c === '%')
        return 2;
    else if (c === '+' || c === '-')
        return 1;
    else
        return -1;
}

// Function to perform infix to postfix conversion
function infixToPostfix(s) {
    let st = [];
    let result = "";
    let number = "";
    let prevChar = ''; // Track previous character

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        // Handle negative numbers (if '-' follows an operator or is at the start)
        if (c === '-' && (i === 0 || /[\+\-\*\/\^\(]/.test(prevChar))) {
            number = "-"; // Start forming a negative number
            i++; // Move to next character
            while (i < s.length && ((s[i] >= '0' && s[i] <= '9') || s[i] === '.')) {
                number += s[i]; // Append digits
                i++;
            }
            result += number + " ";
            i--; // Adjust loop index
        }
        // Handle normal numbers
        else if ((c >= '0' && c <= '9') || c === '.') {
            number = c;
            while (i + 1 < s.length && ((s[i + 1] >= '0' && s[i + 1] <= '9') || s[i + 1] === '.')) {
                number += s[i + 1];
                i++;
            }
            result += number + " ";
        }
        // Handle operators
        else if (c === '(') {
            st.push(c);
        }
        else if (c === ')') {
            while (st.length && st[st.length - 1] !== '(') {
                result += st.pop() + " ";
            }
            st.pop(); // Remove '('
        }
        else {
            while (st.length && (prec(c) <= prec(st[st.length - 1]))) {
                result += st.pop() + " ";
            }
            st.push(c);
        }

        prevChar = c; // Update previous character
    }

    // Pop remaining operators
    while (st.length) {
        result += st.pop() + " ";
    }

    return result.trim();
}


// Function to evaluate postfix expression
function evaluatePostfix(exp) {
    let stack = [];
    let tokens = exp.split(/\s+/); // Split by spaces

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token)); // Convert to float
        } else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(val2 + val1);
                    break;
                case '-':
                    stack.push(val2 - val1);
                    break;
                case '/':
                    stack.push(val2 / val1);
                    break;
                case '*':
                    stack.push(val2 * val1);
                    break;
                case '^':
                    stack.push(val2 ** val1);
                    break;
                case '%':
                    stack.push(val2 % val1);
                    break;
            }
        }
    }
    return stack.pop();
}

export function evaluate(expression) {
    let postfix = infixToPostfix(expression);
    return evaluatePostfix(postfix);
}


