let result = document.querySelector("#result");
let decimalButton = document.querySelector("#btnVirgule");
let calculateButton = document.querySelector("#btnCalculate");
let resetButton = document.querySelector(".reset");
let value1;
let value2;
let operand;
let decimal = false;

// stop refresh after submit
document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();
})

// effects mousedown & mouseup on buttons
let btns = document.querySelectorAll('.btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mousedown", function(e) {
        btns[i].style.backgroundColor = "white";
    })
    btns[i].addEventListener("mouseup", function(e) {
        btns[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
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
decimalButton.addEventListener("click", function(e) {
    result.value += ".";
    //prevents from entering '.' twice (.disabled didn't work)
    decimalButton.style.display = "none";
    calculateButton.style.gridColumn = "3/5";
})

// store numbers when user push operator button
let operators = document.querySelectorAll('.operator')

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function (e) {
        if(!value1) {
            value1 = +result.value;
            operand = operators[i].textContent;
            result.value = "";
            //console.log(`value1 = ${ value1 }`);
        } else if(!value2) {
            value2 = +result.value;
            result.value = "";
            //console.log(`value2 = ${ value2 }`);
        }
    })
}

// On calcule !
calculateButton.addEventListener('click', function(e) {
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
            case 'x':
                result.value = +value1 * +value2;
                break;
            case '/':
                result.value = +value1 / +value2;
                break;
            default:
                throw new Error("Invalid operator");
        }
        value1 = null;
        value2 = null;
        operand = null;
      }
})

//Resets everything (couldn't use a button type="reset" because of bootstrap)
resetButton.addEventListener('click', () => {
    value1 = null;
    value2 = null;
    operand = null;
    result.value = "";
    decimalButton.style.display = "flex";
    calculateButton.style.gridColumn = "4/5";
})