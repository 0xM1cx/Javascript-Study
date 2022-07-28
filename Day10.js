// ===== Javascript Object Practice =====
var student = {
    Name: "Shawn", 
    Age: 17,
    Course: "BSIT"
};

// console.log(student.Name);

// ===== JS Constructor Function Practice =====

function Student(){
    this.grade = 1.10,
    this.name = "Shawn Michael Sudaria",
    this.age = 17;
    this.course = "BSIT",
    this.greet = `Welcome ${this.name}!`
}

const Shawn = new Student();

//console.log(Shawn.greet);
//console.log(Shawn.name);
//console.log(Shawn.course);
//console.log(Shawn.grade);

// ===== Constructor Function with Parameters

function Animal(Animal_Kind, Animal_Color, Animal_Name){
    this.AnimalType = Animal_Kind,
    this.AnimalColor = Animal_Color,
    this.AnimalName = Animal_Name,
    this.GreetAnimal = function(name){
        console.log(`Hello, ${name}`);
    }
}

const Lion = new Animal("Mammal", "Yellow", "Simba");

console.log(Lion.AnimalColor);
Lion.GreetAnimal("Simba");
console.log(Lion.AnimalName);
