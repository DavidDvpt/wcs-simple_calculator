let result = document.querySelector("#result");
let value1;
let value2;
let operand;

// stop refresh after submit
document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();
})

// effects mousedown & mouseup on buttons
let btns = document.querySelectorAll('.btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mousedown", function(e) {
        btns[i].style.backgroundColor = "red";
    })
    btns[i].addEventListener("mouseup", function(e) {
        btns[i].style.backgroundColor = "indigo";
    })
    
}

// add events on calculators buttons for write in the "screen"
for(let i = 0; i<=9; i++){
    let btn = document.querySelector("#btn"+i)

    btn.addEventListener("click", function(e) {
        result.value += i;
    })
}

// Add event on "virgule" button
document.querySelector("#btnVirgule").addEventListener("click", function(e) {
    result.value += ".";
})

// store numbers when user push operator button
let operators = document.querySelectorAll('.operator')

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function (e) {
        if(!value1) {
            value1 = +result.value;
            operand = operators[i].childNodes[1].textContent;
            console.log(operand);
            result.value = "";
            //console.log(`value1 = ${ value1 }`);
        } else if(!value2) {
            value2 = +result.value;
            result.value = "Calculez!";
            //console.log(`value2 = ${ value2 }`);
        }
    })
}

// On calcule !
document.querySelector('#btnCalculate').addEventListener('click', function(e) {
    if (value1) {
        value1 = +value1;
        if (!value2) {
            value2 = +result.value
        }
        //console.log(`value1 : ${value1} ${typeof(value1)} - value2 : ${value2} ${typeof(value1)}`)
        switch(operand){
            case '+':
                result.value =  +value1 + +value2;
                break;
            case '-':
                result.value = +value1 - +value2;
                break;
            case '*':
                result.value = +value1 * +value2;
                break;
            case '/':
                result.value = +value1 / +value2;
                break;
            case '%':
                result.value = +value1 % +value2;
                break;
            default:
                throw new Error("Invalid opérator");
        }
        value1 = null;
        value2 = null;
        operand = null;
      }
})