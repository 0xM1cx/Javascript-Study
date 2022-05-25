const prompt = require('prompt-sync')({sigint: true});

console.log("Welcome to our Wine Store");
console.log("In order to but some wine you need to be over 18");

UserInput = Number(prompt("How old are you: "));


if (UserInput >= 18) {
    console.log("You are now legal to buy some wine");
}else {
    console.log("You are a minor and cannot buy wine. Sorry :) ");
}
