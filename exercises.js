/*Write a function to reverse a number*/
const prompt = require('prompt-sync')({sigint: true});
let userNumber = prompt("Input a number: ");
function reverseNumber(num){
    var num = String(num).split("");
    reversed = num.reverse();
    return Number(reversed.join(''));
}

console.log(reverseNumber(userNumber));
