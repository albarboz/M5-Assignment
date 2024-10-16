function calculate(x, y, operation) {
    switch (operation) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            return y !== 0 ? x / y : "Error: Division by zero is not allowed.";
        default:
            return "Invalid operation";
    }
}

function getInput(promptMessage, isNumber = true) {
    let input;
    do {
        input = prompt(promptMessage);
        if (isNumber) input = parseFloat(input);
    } while (isNumber ? isNaN(input) : !['add', 'subtract', 'multiply', 'divide'].includes(input));
    return input;
}

function runCalculator() {
    do {
        const num1 = getInput("Enter the first number:");
        const num2 = getInput("Enter the second number:");
        const operation = getInput("Enter the operation (add, subtract, multiply, divide):", false);

        const result = calculate(num1, num2, operation);
        alert(`Result: ${result}`);

    } while (confirm("Do you want to perform another calculation?"));
}

runCalculator();
