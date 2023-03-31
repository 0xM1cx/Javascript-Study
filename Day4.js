const prompt = require('prompt-sync')({sigint: true});

function displaySum(prompt){

    let sum = 0;

    do {

        input = prompt("Number: ");

        sum += input;
    } while(input >= 0)

}

function breakLoop(prompt){
    let input = prompt("Number: ");

    for (let i = 0; i < input; --i){
        console.log("less than");
        if (i == -10) {
            break; 
        }
    }
}

function continueLoop(prompt){
    let _input = 0;


    do {
        let input = prompt("Number: ");
        _input = input;
        console.log(_input);
        if (input == 5){
            continue;
        }
    } while(_input != 10)
}


function printValI(prompt){
    let input = prompt("Number: ");
    for (let i = 1; i <= input; ++i){
        if (i == 5 || i == 10){
            continue
        }
        console.log(i);
    }
}

function getCorrectName(prompt) {
    let input = String(prompt("Name? "));
    
    switch(input){
        case "Shawn": 
            console.log(`Welcome back ${input}`);
            break;
        case "Bucky": 
            console.log(`Welcome back ${input}`);
            break;
        default:
            console.log(`Welcome ${input}`);
    }
}


getCorrectName(prompt);