// Step 1: Validate expression (strict mode)
export function validateExpression(expression) {
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

