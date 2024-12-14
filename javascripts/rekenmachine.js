// Append values to the input field
function appendValue(value) {
    const resultField = document.getElementById('result');
    if (resultField.value === '0') {
        resultField.value = value;
    } else {
        resultField.value += value;
    }
}

// Clear the result field
function clearResult() {
    document.getElementById('result').value = '0';
}

// Perform calculation
function calculate() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}