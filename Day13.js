function Student(){
    this.name = "Shawn Michael Sudaria",
    this.age = 18,
    this.course = "BSIT"
}

let studentA = new Student();

// Adding new property
studentA.gender = "Male";
// Adding new method
studentA.welcomeMessage = function() {
    console.log(`Welcome ${studentA.name}`)
}

studentA.welcomeMessage();
console.log(`You are now ${studentA.age}`);

