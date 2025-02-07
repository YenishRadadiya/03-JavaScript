import { validateExpression } from './validate_exp.js';
import { evaluateFunctions } from './eval_advance_function.js';
import { evaluate } from './eval.js';

class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.history = [];
        this.count = 1;
        this.clearDisplay();
    }

    appendToDisplay(value) {
        this.displayElement.value += value;
    }

    clearDisplay() {
        this.displayElement.value = '';
    }

    backspace() {
        this.displayElement.value = this.displayElement.value.slice(0, -1);
    }

    calculate() {
        let expression = validateExpression(this.displayElement.value);
        expression = evaluateFunctions(expression);
        let ans = evaluate(expression);
        this.displayElement.value += `=${ans}`;
        this.history.push(this.displayElement.value);
        localStorage.setItem(this.count.toString(), this.displayElement.value);
        this.count++;
    }
}

export default Calculator;
