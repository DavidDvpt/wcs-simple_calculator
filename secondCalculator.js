let button = document.querySelector('#calculateBtn');
let form = document.querySelector('#form');
let firstValue = document.querySelector('#numberOne');
let secondValue = document.querySelector('#numberTwo');
let operator = document.querySelector('#operator');
let result = document.querySelector('#result');
form.addEventListener('submit', function (e) {
    e.preventDefault();
})

button.addEventListener('click', function (event) {
    // let firstValue = +document.querySelector('#numberOne').value;
    // let secondValue = +document.querySelector('#numberTwo').value;
    // let operator = document.querySelector('#operator').value;
    // let result = document.querySelector('#result');
    
    let resultTemp;
    switch(operator.value){
        case '+':
            resultTemp =  +firstValue.value + +secondValue.value;
            break;
        case '-':
            resultTemp = +firstValue.value - +secondValue.value;
            break;
        case '*':
            resultTemp = +firstValue.value * +secondValue.value;
            break;
        case '/':
            resultTemp = +firstValue.value / +secondValue.value;
            break;
        case '%':
            resultTemp = +firstValue.value % +secondValue.value;
            break;
        default:
            throw new Error("Invalid opérator");
    }
    console.log(resultTemp);
    result.value = resultTemp;
})