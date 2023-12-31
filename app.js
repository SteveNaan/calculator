document.addEventListener("DOMContentLoaded", function () {
function add(num1, num2){
    if(num1 + num2 === 69){
        return (num1 + num2) + " Nice! 👁️👄👁️ ";
    }
    else{
        return num1 + num2
    }
}

function subtract(num1, num2){
    if(num1 - num2 === 69){
        return (num1 - num2) + " Nice! 👁️👄👁️ ";
    }
    else{
        return num1 - num2
    }
}

function multiply(num1, num2){
    if(num1 * num2 === 69){
        return (num1 * num2) + " Nice! 👁️👄👁️ ";
    }
    else{
        return num1 * num2
    }
}

function divide(num1, num2){
    if(num1 === 0 || num2 === 0){
        return "Error 69: You're an idiot! You cannot divide by zero!";
    }
    else{
        return num1 / num2;
    }
}

let num1 = 0;
let num2 = 0;
let operand = "";
let screen = "";

function operate(){
    let result;
    switch(operand){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "×":
            result = multiply(num1, num2)
            break;
        case "÷":
            result = divide(num1, num2)
            break;
        default:
            return;
    }
    if(result.toString().includes('Error')) {
        screenElement.style.color = "red";
    } else if(result.toString().includes('Nice!')) {
        screenElement.style.color = "pink";
    } else {
        screenElement.style.color = "black";
    }
    num1 = result;
    num2 = 0;
    operand = "";
    screen = result.toString();
    screenElement.textContent = screen;
}

const screenElement = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".button.number");
const operandButtons = document.querySelectorAll(".button.operand");
const deleteButton = document.querySelector(".delete")
const clearButton = document.querySelector(".clear")

numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const number = button.textContent;
        screen += number;
        screenElement.textContent = screen;
        screenElement.style.color = "black";
        if (!operand) {
            num1 = parseFloat(screen);
        } else {
            num2 = parseFloat(screen);
        }
    });
});

operandButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if(button.textContent == "="){
            operate();
            num2 = parseFloat(screen);
        }
        else if(button.textContent == "." && !screen.includes('.')){
            screen += ".";
            screenElement.textContent = screen;
            screenElement.style.color = "black";
        }
        else{
            operand = button.textContent;
            screen = "";
        }
    });
});

clearButton.addEventListener("click", function () {
    screen = "";
    screenElement.textContent = screen;
    screenElement.style.color = "black";
    num1 = 0;
    num2 = 0;
});

deleteButton.addEventListener("click", function () {
    screen = screen.slice(0, -1);
    screenElement.textContent = screen;
    screenElement.style.color = "black";
    if (!operand) {
        num1 = parseFloat(screen) || 0;
    } else {
        num2 = parseFloat(screen) || 0;
    }
});

});