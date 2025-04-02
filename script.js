/* Arithmetic Functions */

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

function multiply(a,b) {
    return a * b;
}

/* Variables */

let num1;
let num2;
let oper;

/* Functions */

function operate(a, op, b) {
    switch (op) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '/':
            return divide(a,b);
        case '*':
            return multiply(a,b);
    }
}

const screen = document.querySelector('#screen-container');
const numButtons = document.querySelectorAll('#number-buttons button');
const opButton = document.querySelectorAll('.arithmetic-buttons button:not(#equals-button)');
const equalButton = document.querySelector('#equals-button');

let firstOperand = '';
let secondOperand = '';
let operator = '';
let operatorUsed = false;
let displayed = false;

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (displayed) {
            screen.textContent = '';
            firstOperand = '';
            secondOperand = '';
            operator = '';
            operatorUsed = false;
            displayed = false;
        }
        screen.textContent += buttonValue;
        if (!operatorUsed) {
            firstOperand += buttonValue;
            console.log(`firstOperand: ${firstOperand}`);
        } else {
            secondOperand += buttonValue;
            console.log(`secondOperand: ${secondOperand}`);
        }
    });
});

opButton.forEach(button => {
    button.addEventListener('click', () => {
        if (!operatorUsed && firstOperand) {
            const buttonOp = button.textContent;
            screen.textContent += buttonOp;
            operator = buttonOp;
            console.log(`operator: ${operator}`);
            operatorUsed = true;
        }
    });
});

equalButton.addEventListener('click', () => {
    if(firstOperand && operator && secondOperand) {
        const a = parseFloat(firstOperand);
        const b = parseFloat(secondOperand);

        screen.textContent = operate(a, operator, b);
        console.log(`answer: ${operate(a, operator, b)}`);
        displayed = true;
    }
})