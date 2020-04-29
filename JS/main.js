const display = document.querySelector("#display");

const numPads = document.querySelectorAll(".number-pad");
const clearButton = document.querySelector("#pad-clear");

//operators
const plusPad = document.querySelector("#pad-plus");
const minusPad = document.querySelector("#pad-minus");
const equalPad = document.querySelector("#pad-equals");
const timesPad = document.querySelector("#pad-times");
const dividePad = document.querySelector("#pad-divide");
const deletePad = document.querySelector("#pad-delete");
const signPad = document.querySelector("#pad-sign");
const dotPad = document.querySelector("#pad-dot");

//operands
let firstNumber = '';
let secondNumber = '';
let operator = '';
let dot = false;

clearButton.addEventListener("click", clear);

function updateDisplay(n){
    display.childNodes[0].textContent = n;
}

window.addEventListener("keypress", function(e){
    let num = +(String.fromCharCode(e.keyCode));
    if(num === 0 || num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9){
        if(firstNumber === ''){
            firstNumber = +(num);
            updateDisplay(firstNumber);
        }else if(firstNumber !== '' && !operator){
            if(dot){
                firstNumber = +(firstNumber.toString() + '.' + num);
                dot = false;
            }else{
                firstNumber = +(firstNumber.toString() + num);
            }
            updateDisplay(firstNumber);
        }else if(firstNumber !== '' && operator){
            if(dot){
                secondNumber = +(secondNumber.toString() + '.' + num);
                dot = false;
            }else{
                secondNumber = +(secondNumber.toString() + num);
            }
            updateDisplay(secondNumber);
        }
    }
    console.log(+(String.fromCharCode(e.keyCode)));
})

numPads.forEach(numPad => {
    let num = +numPad.childNodes[0].textContent;
    numPad.addEventListener("click", function(){
        if(firstNumber === ''){
            firstNumber = +(num);
            updateDisplay(firstNumber);
        }else if(firstNumber !== '' && !operator){
            if(dot){
                firstNumber = +(firstNumber.toString() + '.' + num);
                dot = false;
            }else{
                firstNumber = +(firstNumber.toString() + num);
            }
            updateDisplay(firstNumber);
        }else if(firstNumber !== '' && operator){
            if(dot){
                secondNumber = +(secondNumber.toString() + '.' + num);
                dot = false;
            }else{
                secondNumber = +(secondNumber.toString() + num);
            }
            updateDisplay(secondNumber);
        }
        
    });
});

plusPad.addEventListener("click", function(){
    if(firstNumber !== '' && secondNumber){
        operator = "plus"
        operate();
        operator = "plus";
    }
    operator = "plus"
});
minusPad.addEventListener("click", function(){
    if(firstNumber !== '' && secondNumber){
        operator = "minus"
        operate();
        operator = "minus";
    }
    operator = "minus"
});
timesPad.addEventListener("click", function(){
    if(firstNumber !== '' && secondNumber){
        operator = "times"
        operate();
        operator = "times";
    }
    operator = "times"
});
dividePad.addEventListener("click", function(){
    if(firstNumber !== '' && secondNumber){
        operator = "divide"
        operate();
        operator = "divide";
    }
    operator = "divide"
});

deletePad.addEventListener("click", function(){
    if(!operator && firstNumber){
        if(firstNumber.toString().length > 1){
            firstNumber = +(firstNumber.toString().slice(0, firstNumber.toString().length-1));
        }else{
            firstNumber = 0;
        }
        updateDisplay(firstNumber);
    }else if(secondNumber){
        if(secondNumber.toString().length > 1){
            secondNumber = +(secondNumber.toString().slice(0, secondNumber.toString().length-1));
        }else{
            secondNumber = 0;
        }
        updateDisplay(secondNumber);
    }else if(operator && !secondNumber){
        if(firstNumber.toString().length > 1){
            firstNumber = +(firstNumber.toString().slice(0, firstNumber.toString().length-1));
        }else{
            firstNumber = 0;
        }
        updateDisplay(firstNumber);
    }
});

signPad.addEventListener("click", function(){
    if(!operator){
        firstNumber = firstNumber*-1;
        updateDisplay(firstNumber);
    }else if(secondNumber !== ''){
        secondNumber = secondNumber*-1;
        updateDisplay(secondNumber);
    }else{
        firstNumber = firstNumber*-1;
        updateDisplay(firstNumber);
    }
});

dotPad.addEventListener("click", function(){
    dot = true;
});

equalPad.addEventListener("click", operate);

function operate(){
    if(operator === "plus"){
        firstNumber = add(firstNumber, secondNumber);
        updateDisplay(firstNumber);
        secondNumber = '';
        operator = '';
    }else if(operator === "minus"){
        firstNumber = minus(firstNumber, secondNumber);
        updateDisplay(firstNumber);
        secondNumber = '';
        operator = '';
    }else if(operator === "times"){
        firstNumber = multiply(firstNumber, secondNumber);
        updateDisplay(firstNumber);
        secondNumber = '';
        operator = '';
    }else if(operator === "divide"){
        firstNumber = divide(firstNumber, secondNumber);
        updateDisplay(firstNumber);
        secondNumber = '';
        operator = '';
    }
}

function clear(){
    firstNumber = '';
    secondNumber = '';
    operator = '';
    dot = false;
    updateDisplay(0);
}

function add(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//evaluation


