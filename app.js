function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

num1 = "" 
num2 = ""
operand = ""

function operate(){
    let result;
    switch(operand){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2)
            break;
        case "/":
            result = divide(num1, num2)
            break;
    }
}