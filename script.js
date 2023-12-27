document.addEventListener("DOMContentLoaded", function () {
    // Simulate delay for demonstration purposes (you can remove this in a real application)
    setTimeout(function () {
        document.getElementById("preloader").style.opacity = 0;
        document.getElementById("calculator").style.display = "grid";
        setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
        }, 500);
    }, 2000);
});



let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let currentResult = 0;

function clearDisplay() {
    display.textContent = "0";
    currentInput = "";
    currentOperator = "";
    currentResult = 0;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== "") {
        if (currentOperator !== "") {
            calculate();
        }
        currentOperator = operator;
        currentResult = parseFloat(currentInput);
        currentInput = "";
    }
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function calculate() {
    if (currentInput !== "") {
        let input = parseFloat(currentInput);
        switch (currentOperator) {
            case "+":
                currentResult += input;
                break;
            case "-":
                currentResult -= input;
                break;
            case "*":
                currentResult *= input;
                break;
            case "/":
                if (input !== 0) {
                    currentResult /= input;
                } else {
                    alert("Cannot divide by zero!");
                    clearDisplay();
                    return;
                }
                break;
            default:
                break;
        }
        currentInput = currentResult.toString(); 
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput === "" ? "0" : currentInput;
}
