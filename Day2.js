function ifLegal(){

    const prompt = require('prompt-sync')({sigint: true});
    
    console.log("Welcome to our Wine Store");
    console.log("In order to but some wine you need to be over 18");
    
    let UserInput = Number(prompt("How old are you: "));
    
    
    if (UserInput >= 18) {
        console.log("You are now legal to buy some wine");
    }else {
        console.log("You are a minor and cannot buy wine. Sorry :) ");
    }
}

function getLargerInt(){
    const prompt = require('prompt-sync')({sigint: true});

    let intOne = prompt("First Number: ");
    let intTwo = prompt("Second Number: ");

    if (intOne > intTwo){
        console.log(`${intOne} is larger`);
    } else if (intOne < intTwo) {
        console.log(`${intTwo} in Larger`);
    }else{
        console.log(`${intOne} and ${intTwo} are equal`)
    }
}

getLargerInt();