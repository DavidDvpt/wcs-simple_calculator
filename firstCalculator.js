let firstValue = +prompt('Valeur numéro 1 :');
let operator = prompt('Operator :');
let secondValue = +prompt('Valeur numéro 2 : ');

let result;
switch(operator){
    case '+':
        result = firstValue + secondValue;
        break;
    case '-':
        result = firstValue - secondValue;
        break;
    case '*':
        result = firstValue * secondValue;
        break;
    case '/':
        result = firstValue / secondValue;
        break;
    case '%':
        result = firstValue % secondValue;
        break;
    default:
        throw new Error("Invalid opérator");
}

console.log(`resultat ${result}`)