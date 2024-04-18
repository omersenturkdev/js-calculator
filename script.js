let currentInput = '0';
let history = [];  

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '0') {
        currentInput += operator;
    }
    updateDisplay();
}

function appendDecimalPoint() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput).toString();
        updateHistory(currentInput, result); 
        currentInput = '0';
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateHistory(operation, result) {
    const operationEntry = `${operation} = ${result}`;
    history.push(operationEntry);
    displayHistory();
}

function displayHistory() {
    const historyElement = document.getElementById('historyList');
    historyElement.innerHTML = '';
    history.forEach(item => {
        const entry = document.createElement('li');
        entry.textContent = item;
        historyElement.appendChild(entry);
    });
}

updateDisplay();
