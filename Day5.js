const prompt = require("prompt-sync")({sigint: true});

// Display Text
function displayGreeting(prompt){
    userName = prompt("What is your name? ");
    return `Welcome ${userName}`;


}

console.log(Date.now());
greeting = displayGreeting(prompt);

console.log(greeting);
