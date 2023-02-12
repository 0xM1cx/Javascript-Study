function test(){
    let names = ["Shawn", "Crystal", "Zyra"]
    names.name = "Justing";
    names[4] = "Jade";
    
    console.log(names);
    console.log(names.name);
    console.log(names[1]);
    console.log(names[4]);
}

function multidimensionalArrays(){
    let arr = [[1, 2, 4], [123, 41, 512], [54, 29, 89]];
    for(let j of arr){
        for(let b of j){
            console.log(b);
        }
    }
}

function forInLoop(){
    let names = ["Shawn", "Crystal", "John", "Carl", "Nikki", ""]
    for(let value in names){
        console.log(value);
    }

    for(let char in names[0]){
        console.log(names[0][char]);
    }
}

function numberTest(){
    console.log(2/0);
    console.log(-2/0);
    console.log(0xff);
    console.log(5e5);
}

numberTest();