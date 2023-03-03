const { convertToObject } = require("typescript");

function Car(){
    this.color = "blue";
}


const suzuki = new Car();

function Student(){
    this.name = "Shawn",
    this.age = 18
}


Student.prototype.gender = "male";
Student.prototype.school = "EVSU";
Student.prototype.year_level = 1;
Student.prototype.greet = function(){
    console.log(`Welcome ${this.name} to ${this.school}`);
}
const BSIT_Student = Student();
console.log(Student.prototype);

Student.prototype = {year_level: 2};
Student.prototype = {greet: function(){
    console.log(`Welcome ${this.name}`);
}}
    
console.log(Student.prototype);
console.log(Student.prototype.year_level);