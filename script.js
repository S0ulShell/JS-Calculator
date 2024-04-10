let num1;
let operator;
let num2;

let displayText = "";
var digits = ["AC","%",7,8,9,"X",4,5,6,"+",1,2,3,"-",0,".","Del", "="];

const screen = document.getElementById("screen");
screen.addEventListener("input", () => displayText = screen.value)

for(i = 0; i < digits.length; i++) {
    let digit = digits[i];
    var button = document.createElement("input");

    //iniatializes button for css styling and referencing, type, value, name, class and Id are used.
    //Eventhandler assigned at 
    //creation before appending to parent
    button.value = digit;
    button.name = digit;
    button.id = "b" + digit;
    button.type = "button";
    button.classList.add("button")
    button.addEventListener("click",() => updateDisplay(digit));
    var buttonContainer = document.getElementById("buttons");
    buttonContainer.appendChild(button);
  }

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch(operator){
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

function updateDisplay(digit){
    console.log(digit);
    switch(digit){
        case "AC":
            screen.value = "";
            displayText = "";
            screen.value = displayText;
            break;
        case "Del":
            displayText = displayText.slice(0, -1);
            screen.value = displayText;
            break;
        default: 
            displayText += digit;
            screen.value = displayText;
    }
    
}

