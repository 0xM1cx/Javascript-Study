// ===== Object Literal vs Constructor Function =====

// The explaination for the code below is in the notes
// on the topic of constructor function vs object literal
// the code below is an example of how a an object literal permanently changes
// the property if it is changes. In contrast to a constructor function
// which only gives a sort of "instance" or "copy" of the original function.

// Making a constructor function

function Student(studentname){
    this.name = studentname,
    this.age = 16
}


let StudentA = new Student("Shawn");
StudentA.course = "BSIT";

console.log(StudentA.age);

let StudentB = new Student("Shawn");
StudentB.age = 17;
console.log(StudentB.age);


// Making a object literal 
let character = {
    name: "John"
}

console.log(character.name);

let king = character;

// this changes the original property value of name to Luther
king.name = "Luther";
console.log(king.name);

console.log(character.name);


// ===== Adding properties and methods to objects =====

// Example of Both constructor function and object literal
// == CONSTRUCTOR FUNCTION ==
function person(){
    this.name = "Shawn"
}

let person1 = new person();
person1.room = "1B"; // Adding a new property
// Adding a new method
person1.greet = function(){console.log(`Welcome ${person1.name} you are in room ${person1.room}`)};

// == OBJECT LITERAL ==
let Gamecharacter = {
    name: "Arthur"
}
// Adding a new property
Gamecharacter.weapon = "Long Sword"
Gamecharacter.greet = function(){console.log(`Welcome King ${Gamecharacter.name} you have a ${Gamecharacter.weapon}`)};


// Calling both objects
person1.greet();
Gamecharacter.greet();
