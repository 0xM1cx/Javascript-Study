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
    let numberOne = prompt("First positive number: ");
    let numberTwo = prompt("Second positive number: ");

    var numOneFactors = [];
    var numTwoFactors = [];
    var GCD = [];
    for(let i = 1; i<= 100; ++i){
        if (numberOne / i == 0){
            numOneFactors.push(i);
        }

        if (numberTwo / i == 0) {
            numTwoFactors.push(i);
        }
    }
    for(let i = 0; i <= numOneFactors.length; ++i){
        for(let b = 0; b <= numTwoFactors.length; ++b){
            if(numOneFactors[i] === numTwoFactors[b]){
                GCD.push(i);
            }
        }
    }

    console.log(GCD);
}


console.log(findGCD());