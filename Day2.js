function ifLegal()
{

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

function getLargerInt()
{
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


function getSign()
{
    const prompt = require('prompt-sync')({sigint: true});

    let intOne = prompt("First Number: ");
    let intTwo =  prompt("Second Number: ");
    let intThree = prompt("Third Number: ");

    let array = [];
    array.push(intOne, intTwo, intThree);

    for (let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            console.log(`The sign for ${array[i]} is -(Negative)`);
        }else{
            console.log(`The sign for ${array[i]} is +(positive)`);
        }
    }
}

function dayTwoDataTypes()
{
    let immutable = 'Shawn Michael';
    console.log(immutable);
    immutable = 'Shawn Michael A. Sudaria';
    console.log(immutable);

    let studentOne = {
        name: "Shawn Michael A. Sudaria",
        course: "BSIT",
        coutry: "Philippines"
    }

    console.log(studentOne.name);
}

function main()
{
    const prompt = require('prompt-sync')({sigint: true});
    console.log("Type the number of the function you want to run");
    console.log("1 => ifLegal()");
    console.log("2 => getLargerInt()");
    console.log("3 => getSign()");
    console.log("4 => dayTwoDataTypes()");
    let userInput = prompt("Your choice: ");

    if (userInput == 1)
    {
        ifLegal();
    } 
    else if (userInput == 2)
    {
        getLargerInt();
    } 
    else if (userInput == 3)
    {
        getSign();
    } 
    else if(userInput == 4)
    {
        dayTwoDataTypes();
    }

}

main();