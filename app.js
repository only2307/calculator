let firstOperand = null, secondOperand = null;
let currentOperator = null;
let isCleared = false;
let result = null;

const display = document.getElementById('display');
const numbers = documemt.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equal = document.getElementById('equal');
const clearButton = document.getElementById('clear');

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (a, b, operator) => {
    switch(operator) {
        case 'add':
            return add(a, b);
            break;
        case 'subtract':
            return subtract(a, b);
            break;
        case 'multiply':
            return multiply(a, b);
            break;
        case 'divide':
            return divide(a, b);
            break;
    }
};