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

function displayValue(value) {
  displayArea.textContent += value;
}

function getDisplayValue() {
  return displayArea.textContent;
}

function setOperator(operator) {
  if (currentOperator == null) {
    currentOperator = operator;
  } 
  else if (firstOperand && secondOperand) {
    result = operate(Number(firstOperand), Number(secondOperand), currentOperator);
    clearDisplay();
    displayValue(result);
    firstOperand = result;
    secondOperand = null;
    currentOperator = operator;
  }
}

function setOperand(value) {
  if (firstOperand == null) {
    firstOperand = value;
  } 
  else {
    secondOperand = value;
  }
}

function clearDisplay() {
  displayArea.textContent = "";
}

function clearAllValues() {
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  clearDisplay();
}

function generateResult() {
  if (firstOperand && currentOperator && !isCleared && !secondOperand) {
    setOperand(getDisplayValue());
    return operate(Number(firstOperand), Number(secondOperand), currentOperator);
  } 
  else {
    return false;
  }
}

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {    
    if (!isCleared) {
      clearDisplay();
    }
    displayValue(e.target.textContent);
    isCleared = false;
  })
})

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    setOperand(getDisplayValue());
    setOperator(e.target.id);
    toBeCleaned = true;
  })
})

equalSign.addEventListener("click", () => {
  result = generateResult();
  clearDisplay();
  if (result) {
    displayValue(result);
  }
})

clearButton.addEventListener('click', () => {
  clearAllValues();
})