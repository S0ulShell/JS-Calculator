let num1;
let operator;
let num2;
var digits = ["c","?","?","%",7,8,9,"X",4,5,6,"+",1,2,3,"-",0,".","Del", "="];

for(i = 0; i < digits.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = digits[i];
    button.className = digits[i];
    button.addEventListener("click", console.log(digits[i]));
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

