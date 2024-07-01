let display1 = document.querySelector('.display-1');
let display2 = document.querySelector('#display-2');
let result = document.querySelector('.result');
let currentInput = '';
let previousInput = '';
let operator = null;

function updateDisplay() {
    display2.innerText = currentInput;
    display1.innerText = previousInput + ' ' + (operator || '');
}

function clearAll() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
    result.innerText = '';
}

function clearEntry() {
    currentInput = '';
    updateDisplay();
}

function inputNumber(num) {
    currentInput += num;
    updateDisplay();
}

function inputDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function inputOperation(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        updateDisplay();
        return;
    }
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        default:
            return;
    }
    currentInput = computation;
    operator = null;
    previousInput = '';
    updateDisplay();
    result.innerText = computation;
}

/* function inputNumber(value){
    document.getElementById('display-2').innerText = value;
} */