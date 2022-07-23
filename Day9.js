// All problems are found here: https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

const prompt = require('prompt-sync')();

// question 1
function calculateFactorial() {
    let numberFactorial = 1;
    let userInput = prompt("Write a number to get the factorial: ");
    for(let i = 1; i <= userInput; ++i){
        numberFactorial *= i;
    }
    return `The factorial of ${userInput} is : ${numberFactorial}`;
}

// question 2
function findGCD(){
    var numberOne = prompt("First positive number: ");
    var numberTwo = prompt("Second positive number: ");

    
}