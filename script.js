let operator = '';
let previousValue ='';
let currentValue = '';

document.addEventListener("DOMContentLoaded", ()=>{
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let decimal = document.querySelector('.decimal');
    let equal = document.querySelector('.equal');
    let clearBtn = document.querySelector('.clear');
    let deleteBtn = document.querySelector('.delete');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    numbers.forEach(number => number.addEventListener('click',(e) => {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }));

    operators.forEach(op => op.addEventListener('click', (e)=> {
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue+" "+operator;
        currentScreen.textContent = currentValue;
    }));

    clearBtn.addEventListener('click', () =>{
        currentValue = '';
        previousValue = '';
        operator = '';
        previousScreen.textContent = '';
        currentScreen.textContent = '';

    })

    equal.addEventListener('click', () => {
        operate();
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;

    })

    decimal.addEventListener('click', addDecimal);

    deleteBtn.addEventListener('click', () => {
        currentValue = currentValue.slice(0,-1);
        currentScreen.textContent = currentValue;
    })
});

function handleNumber(num){ 
    if(currentValue.length <=5){    
    currentValue += num;
}};

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';

}

function operate(){
    currentValue = parseFloat(currentValue);
    previousValue = parseFloat(previousValue);
    if(operator === '+'){
       previousValue += currentValue; 
    } else if(operator === '-'){
        previousValue -= currentValue; 
     } else if(operator === 'x'){
        previousValue *= currentValue; 
     } else {
        previousValue /= currentValue;
     }
     previousValue = roundNumber(previousValue);
     previousValue = previousValue.toString();
     currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num*1000)/1000;
}

function addDecimal() {
    if(!currentValue.includes('.')){
        currentValue += '.';
        currentScreen.textContent = currentValue;
    }
}
