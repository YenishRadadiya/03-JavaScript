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