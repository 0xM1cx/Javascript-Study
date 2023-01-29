function testSigint()
{
    const prompt = require('prompt-sync')({sigint: true});
    
    var userName = prompt("What is your name? ");
    console.log(`Welcome ${userName}`);
}

testSigint();