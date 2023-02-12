function test(){
    let names = ["Shawn", "Crystal", "Zyra"]
    names.name = "Justing";
    names[4] = "Jade";
    
    console.log(names);
    console.log(names.name);
    console.log(names[1]);
    console.log(names[4]);
}

test();