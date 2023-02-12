
function Student(){
    this.name = "Shawn"
}

Student.prototype = {name: "Shawn Michael"};
Student.prototype = {age: 18};
Student.prototype.gender = "Male";

const stud1 = new Student();

