//Project by Rkim67

function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(operator, op1, op2){
    if (operator == "sum") { add(op1, op2) }
    else if(operator == "subtract") { subtract(op1, op2)}
    else if(operator == "multiply") { multiply(op1, op2)}
    else if(operator == "divide") { divide(op1, op2)}
}

const player1 = document.querySelector("#display");
player1.textContent = "8000";
let p1 = 8000;

const player2 = document.querySelector("#display2");
player2.textContent = "8000";
let p2 = 8000;

const displayNum = document.querySelector("#current");
displayNum.textContent = "0";
let display = 0;

function updateDisplay(addNum){
    if (display > 999){
        return;
    }
    display *= 10;
    display += addNum;
    displayNum.textContent = display;
}

const add1 = document.querySelector('#add1');
add1.addEventListener("click", () => {
    p1 += display;
    player1.textContent = p1;
    display = 0;
    displayNum.textContent = display;
})

const add2 = document.querySelector('#add2');
add2.addEventListener("click", () => {
    p2 += display;
    player2.textContent = p2;
    display = 0;
    displayNum.textContent = display;
})

const subtract1 = document.querySelector('#subtract1');
subtract1.addEventListener("click", () => {
    p1 -= display;
    player1.textContent = p1;
    display = 0;
    displayNum.textContent = display;
})

const subtract2 = document.querySelector('#subtract2');
subtract2.addEventListener("click", () => {
    p2 -= display;
    player2.textContent = p2;
    display = 0;
    displayNum.textContent = display;
})

const half1 = document.querySelector('#half1');
half1.addEventListener("click", () => {
    p1 /= 2;
    player1.textContent = p1;
    display = 0;
    displayNum.textContent = display;
})

const half2 = document.querySelector('#half2');
half2.addEventListener("click", () => {
    p2 /= 2;
    player2.textContent = p2;
    display = 0;
    displayNum.textContent = display;
})

const btn1 = document.querySelector('#one');
btn1.addEventListener("click", () => {updateDisplay(1);})

const btn2 = document.querySelector('#two');
btn2.addEventListener("click", () => {updateDisplay(2);})

const btn3 = document.querySelector('#three');
btn3.addEventListener("click", () => {updateDisplay(3);})

const btn4 = document.querySelector('#four');
btn4.addEventListener("click", () => {updateDisplay(4);})

const btn5 = document.querySelector('#five');
btn5.addEventListener("click", () => {updateDisplay(5);})

const btn6 = document.querySelector('#six');
btn6.addEventListener("click", () => {updateDisplay(6);})

const btn7 = document.querySelector('#seven');
btn7.addEventListener("click", () => {updateDisplay(7);})

const btn8 = document.querySelector('#eight');
btn8.addEventListener("click", () => {updateDisplay(8);})

const btn9 = document.querySelector('#nine');
btn9.addEventListener("click", () => {updateDisplay(9);})

const btn0 = document.querySelector('#zero');
btn0.addEventListener("click", () => {updateDisplay(0);})

const btn00 = document.querySelector('#doublezero');
btn00.addEventListener("click", () => {
    updateDisplay(0);
    updateDisplay(0);
})

const btn000 = document.querySelector('#triplezero');
btn000.addEventListener("click", () => {
    updateDisplay(0);
    updateDisplay(0);
    updateDisplay(0);
})

const clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    display = 0;
    displayNum.textContent = display;
})

const back = document.querySelector('#back');
back.addEventListener("click", () =>{
    display /= 10;
    display = Math.trunc(display);
    displayNum.textContent = display;
})

const reset = document.querySelector('#reset')
reset.addEventListener("click", () =>{
    player1.textContent = "8000";
    player2.textContent = "8000";
    p1 = 8000;
    p2 = 8000;
    display = 0;
    displayNum.textContent = display;
})
