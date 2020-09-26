let displayScreen = document.querySelector("#displayScreen");
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
for (let i = 0; i < btns.length; i++)
{
    btns[i].addEventListener("mousedown", function(e) {
        btns[i].style.backgroundColor = "white";
    })
    btns[i].addEventListener("mouseup", function(e) {
        //btns[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
        // ** indogo because we need same color as default when mouseup **
        btns[i].style.backgroundColor = "indigo";
    })  
}

// add events on calculators buttons for write in the "screen"
for(let i = 0; i<=9; i++)
{
    let btn = document.querySelector("#btn"+i)

    btn.addEventListener("click", function(e) {
        displayScreen.value += i;
    })
}

// Add event on "virgule" button
decimalButton.addEventListener("click", function(e) {
    // if screen contain '.' we don't add one
    if (displayScreen.value.indexOf(".") === -1)
    {
        displayScreen.value += ".";
    }
    //prevents from entering '.' twice (.disabled didn't work)

    /* with this code under, we can't enter second value with "." because the button desapear and need to click
    on reset for display it again.*/
    //decimalButton.style.display = "none";
    //calculateButton.style.gridColumn = "3/5";
})

// store numbers when user push operator button
let operators = document.querySelectorAll('.operator')

for (let i = 0; i < operators.length; i++)
{
    operators[i].addEventListener("click", function (e) {
        if(value1)
        {
            value1 = +displayScreen.value;
            displayScreen.value = "";
            console.log(operators[i]);
            operand = operators[i].nodeValue[1].textContent;
            //console.log(`value1 = ${ value1 }`);
            if(value2)
            {
                value2 = +displayScreen.value;
                displayScreen.value = "";
                //console.log(`value2 = ${ value2 }`);
            }
        }
    })
}

// On calcule !
btnCalculate.addEventListener('click', function(e) {
    if (value1)
    {
        value1 = +value1;

        if (!value2)
        {
            value2 = +displayScreen.value
        }

        
        //console.log(`value1 : ${value1} ${typeof(value1)} - value2 : ${value2} ${typeof(value1)}`)
        switch(operand){
            case '+':
                displayScreen.value =  +value1 + +value2;
                break;
            case '-':
                displayScreen.value = +value1 - +value2;
                break;
            case 'x':
                displayScreen.value = +value1 * +value2;
                break;
            case '/':
                displayScreen.value = +value1 / +value2;
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
btnReset.addEventListener('click', () => {
    value1 = null;
    value2 = null;
    operand = null;
    // already implemented in reset button form (reset all inputs of the form)
    //displayScreen.value = "";
    //decimalButton.style.display = "flex";
    //calculateButton.style.gridColumn = "4/5";
})