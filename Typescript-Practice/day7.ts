class Student{
    name: string;
    id: number;
    gender: string;

    constructor(name: string, id: number, gender: string){
        this.name = name;
        this.id = id;
        this.gender = gender;
    }
}



let shun = new Student("Shawn", 14, "Male");

console.log(shun.name, shun.id, shun.gender);
let sample: (string|number)[] = ["Shawn", 14];

sample.forEach(el => {
    console.log(el);
}
);