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

