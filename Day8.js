// Making an Object and adding a method.

let student = {};

student.age = 17;
student.name = "Shawn";
student.enrollmentStatus = function () {
    console.log("Is enrolled");
}

console.log(student.age);

console.log(student.name);
student.enrollmentStatus();

// Using the this keyword to access a property inside an object
// and use it in a method inside the object.

let User = {
    name: 'Shawn',
    age: 17,
    isMinor: function (){
        let pronoun = "he"
        console.log(`User ${this.name} is ${this.age} years old, therefore ${pronoun} is a minor`);
    }

}
User.isMinor();
