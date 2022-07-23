const prompt = require('prompt-sync')();

function calculateFactorial() {
    let userInput = prompt("Write a number to get the factorial: ");
    for(let i = 1; i <= userInput; ++i){
        console.log("Number: ${i}");
    }
}

calculateFactorial();