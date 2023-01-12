<<<<<<< HEAD
// Javascript Arrays
const studentName = ["Shawn", "Jason", "Kevin", "Crystal", "Zyra"];

console.log(studentName.push("Kevin"));
console.log(studentName);
=======
function Student(){
    this.name = "Shawn Michael Sudaria",
    this.age = 18,
    this.course = "BSIT"
}

let studentA = new Student();
let studentB = new Student();

// Adding new property
studentA.gender = "Male";
// Adding new method
studentA.welcomeMessage = function() {
    console.log(`Welcome ${studentA.name}`)
}

studentA.welcomeMessage();
console.log(`You are now ${studentA.age}`);
// welcome student B
studentB.greet = function(){
    console.log(`Welcome ${studentB.name}`)
}

studentB.greet();




>>>>>>> 56b0298de9f7f8214f1f3e13f00c72e578cfff18
