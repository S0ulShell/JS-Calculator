let num1;
let operator;
let num2;
let displayVal = "";
var digits = ["AC","%",7,8,9,"X",4,5,6,"+",1,2,3,"-",0,".","Del", "="];

for(i = 0; i < digits.length; i++) {
    let digit = digits[i];
    var button = document.createElement("input");
    button.type = "button";
    button.value = digit;
    button.classList.add("button")
    button.id = "b" + digit;
    button.addEventListener("click", ()=> console.log(digit));
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

function updateDisplay(){

}
