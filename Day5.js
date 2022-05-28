const prompt = require("prompt-sync")({sigint: true});

// Display Text
function displayGreeting(){
    let userName = prompt("What is your name? ");
    return `Welcome ${userName}`;

}
// variable scope
function getNameLog(){
    let userName = prompt("What's you Username? "); //; using the prompt global variable
    let date = Date.now();
    console.log(`User: ${userName}, Logged in on ${date}`);
}

getNameLog();
