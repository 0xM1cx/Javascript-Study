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

multidimensionalArrays();