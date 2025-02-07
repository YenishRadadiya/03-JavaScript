export function evaluateFunctions(expression) {
    expression = expression.replace(/\bpi\b/g, Math.PI.toString());
    expression = expression.replace(/\be\b/g, Math.E.toString());

    return expression.replace(/(sin|cos|tan|log|sqrt)\((-?\d+(\.\d+)?)\)/g, (match, func, num) => {
        num = parseFloat(num);
        switch (func) {
            case "sin": return parseFloat(Math.sin(num * Math.PI / 180).toFixed(4));
            case "cos": return parseFloat(Math.cos(num * Math.PI / 180).toFixed(4));
            case "tan": return parseFloat(Math.tan(num * Math.PI / 180).toFixed(4));
            case "log": return Math.log10(num).toFixed(4);
            case 'sqrt': return parseFloat(Math.sqrt(num)).toFixed(4);
            default: return match; // Should not happen
        }
    });
}