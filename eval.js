// Function to return precedence of operators
function prec(c) {

    if (c === '^')
        return 3;
    else if (c === '/' || c === '*')
        return 2;
    else if (c === '+' || c === '-')
        return 1;
    else
        return -1;
}

// Function to perform infix to postfix conversion with space seperated numbers and operators
function infixToPostfix(s) {
    let st = [];
    let result = "";
    let number;

    for (var i = 0; i < s.length; i++) {
        let c = s[i];
        number = c.toString();
        // If the scanned character is
        // an operand, add it to the output string.
        if (c >= '0' && c <= '9') {
            while (i + 1 < s.length && (s[i + 1] >= '0' && s[i + 1] <= '9')) {
                number += s[i + 1].toString();
                i++;
            }
            result += number;
            result += " ";
        }
        // If the scanned character is 
        // an ‘(‘, push it to the stack.
        else if (c === '(')
            st.push('(');

        // If the scanned character is an ‘)’,
        // pop and add to the output string from the stack
        // until an ‘(‘ is encountered.
        else if (c === ')') {
            while (st[st.length - 1] !== '(') {
                result += st.pop();
                result += " ";
            }
            st.pop();
        }

        // If an operator is scanned
        else {
            while (st.length && (prec(c) < prec(st[st.length - 1]) ||
                prec(c) === prec(st[st.length - 1]))) {
                result += st.pop();
                result += " ";
            }
            st.push(c);
        }
    }

    // Pop all the remaining elements from the stack
    while (st.length) {
        result += st.pop();
        result += " ";
    }

    // console.log(result);
    return result;
}

let exp = "200+20*15-(45/5)";
var result1 = infixToPostfix(exp);
console.log(result1);

// multi-digit postfix evaluation function
function evaluatePostfix(exp) {
    // create a stack
    let stack = [];

    // Scan all characters one by one
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];

        if (c == ' ') {
            continue;
        }

        // If the scanned character is an 
        // operand (number here),extract
        // the number. Push it to the stack.
        else if (c >= '0' && c <= '9') {
            let n = 0;

            // extract the characters and
            // store it in num
            while (c >= '0' && c <= '9') {
                n = n * 10 + (c - '0');
                i++;
                c = exp[i];
            }
            i--;

            // push the number in stack
            stack.push(n);
        }

        // If the scanned character is
        // an operator, pop two elements
        // from stack apply the operator
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(parseInt(val2 / val1, 10));
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}

console.log(evaluatePostfix(result1));
