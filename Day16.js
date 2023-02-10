const { couldStartTrivia } = require("typescript");

function Student(){
    this.name = "Shawn"
}

Student.prototype = {name: "Shawn Michael"};
Student.prototype = {age: 18};


const stud1 = new Student();

console.log(Student.prototype);
console.log(stud1.name);
console.log(stud1.age);
