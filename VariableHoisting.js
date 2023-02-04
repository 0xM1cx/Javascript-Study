
const prompt = require('prompt-sync')({sigint: true});

testSigint();

function testSigint(){
    
    userName = prompt("What is your name? ");
    console.log(`Welcome ${userName}`);
    var userName;
}
