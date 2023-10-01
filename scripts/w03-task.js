/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers() {
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").innerHTML = add(add1, add2);
}

document.getElementById("addNumbers").addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);
    document.getElementById('difference').value = subtract(subtract1, subtract2);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiplyNumbers = (factor1, factor2) => {factor1 * factor2};
document.getElementById('product').value = multiply(factor1, factor2);

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1/number2;
}

function divideNumbers() {
    let dividend = Number(document.querySelector("dividend").value);
    let divisor = Number(document.querySelector("divisor").value);
    document.getElementById('quotient').value = add(dividend, divisor);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let today = new Date();

let currentYear = '';
currentYear = today.getFullYear();

document.getElementById('year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = array;

/* Output Odds Only Array */
let odds = '';
document.getElementById('odds').innerHTML = numbersArray.filter(number => number % 2 != 0);

/* Output Evens Only Array */
let evens = '';
document.getElementById('evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
let sumOfArray = '';
document.getElementById('sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
let multiplied = '';
document.getElementById('multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = '';
document.getElementById('sumOfMultiplied').innerHTML = numbersArray.reduce((multiplied, number));
