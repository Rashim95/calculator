let operator = '';
let previousValue ='';
let currentValue = '';

document.addEventListener("DOMContentLoaded", ()=>{
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let equal = document.querySelector('.equal')
    let clearBtn = document.querySelector('.clear');
    let deleteBtn = document.querySelector('.delete');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    numbers.forEach(number => number.addEventListener('click',(e) => console.log(e.target.textContent)));
    operators.forEach(operator => operator.addEventListener('click', (e)=> console.log(e.target.textContent)));
});