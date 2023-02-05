// Methods and accessing the methods property using the this keyword
function methodsPractice(){
    const student = {
        total: 0,
        name: "Shawn",
        age: 18,
        school: "EVSU",
        total_funds: function(income_source) {
            income_source.forEach(element => {
                this.total += element;
            });
    
            console.log(`${this.name}'s Total funds are ${this.total}`);
        }
    }
    
    student.greet = function(name){
        console.log(`Welcome ${name}`);
    }
    
    
    student.greet("Shawn");
    
    student.total_funds([1, 2, 3, 4, 5, 6])
}


// constructor function
function constructorPractice(){
    function Student(){
        this.name = "Shawn",
        this.age = 18,
        this.school = "EVSU"
    }

    let BSIT_Student = new Student();
    console.log(`Welcome to ${BSIT_Student.school} Mr. ${BSIT_Student.name}`);
}



// for(let i = 0; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


function getArraySum(arr){
    sum = 0
    arr.forEach(element => {
        sum += element;
    })

    return sum;
}

console.log(`The sum of the array is ${getArraySum([1, 2, 3, 4, 5, 6])}`);