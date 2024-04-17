let num1 = "";
let operator;
let num2 = "";

let displayValue = ""
var digits = ["AC", "Del", "/", 7, 8, 9, "X", 4, 5, 6, "+", 1, 2, 3, "-", 0, "="];

//grabs screen element and adds event listener to it, which stores displayed value into a varable displayText
const screen = document.getElementById("screen");
screen.addEventListener("input", () => displayText = screen.value)

//for loop initializes buttons and adds event listeners to each button on creation
for (i = 0; i < digits.length; i++) {
    let digit = digits[i];
    var button = document.createElement("input");

    //iniatializes button for css styling and referencing, type, value, name, class and Id are used.
    button.value = digit;
    button.name = digit;
    button.id = "b" + digit;
    button.type = "button";
    button.classList.add("button")
    button.addEventListener("click", () => updateDisplay(digit));
    var buttonContainer = document.getElementById("buttons");
    buttonContainer.appendChild(button);
}

//this function is called by button event listener inorder to update what is shown on screen 
//contains a switch check so that operators are handled appropriately instead of showing up on the display
function updateDisplay(digit) {
    switch (digit) {

        case "AC":
            screen.value = "";
            displayValue = "";
            num1 = "";
            num2 = "";
            operator = "";
            break;

        case "Del":
            break;
            
        case "+":
            operator = "+"
            if (num1) {
                num2 = screen.value;
                num1 = operate(num1, operator, num2);
                num2 = "";
                displayValue = "";
            } else {
                num1 = displayValue;
                displayValue = "";
            }
            break;

        case "-":
            operator = "-"
            if (num1) {
                num2 = screen.value;
                num1 = operate(num1, operator, num2);
                num2 = "";
                displayValue = "";
            } else {
                num1 = displayValue;
                displayValue = "";
            }
            break;

        case "X":
            operator = "X"
            if (num1) {
                num2 = screen.value;
                num1 = operate(num1, operator, num2);
                num2 = "";
                displayValue = "";
            } else {
                num1 = displayValue;
                displayValue = "";
            }
            break;

        case "/":
            operator = "/"
            if (num1) {
                num2 = screen.value;
                num1 = operate(num1, operator, num2);
                num2 = "";
                displayValue = "";
            } else {
                num1 = displayValue;
                displayValue = "";
            }
            break;

        case "=":
            if (num1) {
                num2 = screen.value;
                if (num2 == "0" && operator == "/") {
                    screen.value = "( ͠° ͟ʖ ͡°) sussy?"
                    displayValue = "";
                    num1 = "";
                    num2 = "";
                    operator = "";
                    break;
                }
                num1 = operate(num1, operator, num2);
                num2 = "";
                displayValue = num1;
                screen.value = displayValue;
                num1 = "";
            }

        default:
            //without this, screen will display = after answer, dont know why it is accessing default case 
            if (digit == "=") {
                break;
            }
            displayValue += digit;
            screen.value = displayValue;
    }

}

function operate(num1, operator, num2) {
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    switch (operator) {
        case "+":
            displayValue = int1 + int2;
            screen.value = displayValue;
            return displayValue.toString();
        case "-":
            displayValue = int1 - int2;
            screen.value = displayValue;
            return displayValue.toString();
        case "X":
            displayValue = int1 * int2;
            screen.value = displayValue;
            return displayValue.toString();
        case "/":
            if (int2 == 0) {
                screen.value = "( ͠° ͟ʖ ͡°) sussy?";
                break;
            }
            displayValue = int1 / int2;
            screen.value = displayValue;
            return displayValue.toString();
    }
}
