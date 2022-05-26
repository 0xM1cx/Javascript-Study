const prompt = require('prompt-sync')({sigint: true});

// Display a message 10 times
function displayMessageRepeatedly(){
    for (let i = 1; i <= 10; ++i){
        console.log("Hello there");

    }   

}

// Display the sum of N natural numbers
function getSumOfNaturalNums(prompt){

    let sum = 0;
    let n = prompt("Sum of how many numbers?: ");

    for (let i = 1; i <= n; ++i){
        sum += i;
    }   

    console.log(`Sum of all the natural numbers specifies is: ${sum}`);
}

function displayFiveNums(){
    let n = prompt("Total numbers to display: ");
    let i = 1;
    
    while (i <= n){
        console.log(`Hello, ${i}`);
        i++;
    }
}

displayFiveNums(prompt)


