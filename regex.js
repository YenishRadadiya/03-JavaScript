// Step 1: Validate expression (strict mode)
function validateExpression(expression) {
    expression = expression.toLowerCase(); // Normalize case

    // Check for invalid sequences (e.g., `++`, `--`, `*/`, etc.)
    if (/[\+\-\*\/%\^]{2,}/.test(expression)) {
        throw new Error("Invalid operator sequence detected!");
    }

    // Ensure valid parentheses usage
    let openBrackets = (expression.match(/\(/g) || []).length;
    let closeBrackets = (expression.match(/\)/g) || []).length;
    if (openBrackets !== closeBrackets) {
        throw new Error("Mismatched parentheses!");
    }

    // Check for invalid function calls (e.g., `sin30` instead of `sin(30)`)
    if (/(sin|cos|tan|log)(\d+)/.test(expression)) {
        throw new Error("Invalid function usage! Use parentheses (e.g., sin(30)).");
    }

    // Check for numbers adjacent to functions without an operator (e.g., `3sin(30)`)
    if (/\d+(sin|cos|tan|log)/.test(expression)) {
        throw new Error("Missing operator before function! Use `3*sin(30)`.");
    }

    return expression; // If valid, return the expression unchanged
}


// Step 2: Evaluate advanced functions (sin, cos, tan, log, pi, e)
function evaluateFunctions(expression) {
    expression = expression.replace(/\bpi\b/g, Math.PI.toString());
    expression = expression.replace(/\be\b/g, Math.E.toString());

    return expression.replace(/(sin|cos|tan|log)\((-?\d+(\.\d+)?)\)/g, (match, func, num) => {
        num = parseFloat(num);
        switch (func) {
            case "sin": return Math.sin(num * Math.PI / 180);
            case "cos": return Math.cos(num * Math.PI / 180);
            case "tan": return Math.tan(num * Math.PI / 180);
            case "log": return Math.log10(num);
            default: return match; // Should not happen
        }
    });
}

// Step 3: Evaluate final expression using postfix notation
function evaluateExpression(expression) {
    let validated = validateExpression(expression); // Stage 1: Validate
    let evaluated = evaluateFunctions(validated); // Stage 2: Compute functions
    return evaluatePostfix(infixToPostfix(evaluated)); // Stage 3: Compute final result
}

// Example Usage
try {
    let exp = "3*sin(30)+cos(60)*pi";
    console.log(evaluateExpression(exp)); // Expected: 1.5
} catch (error) {
    console.error(error.message);
}

try {
    let exp = "3+++4"; // Invalid expression
    console.log(evaluateExpression(exp)); // Should throw an error
} catch (error) {
    console.error(error.message);
}
