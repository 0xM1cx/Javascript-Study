// The spread operator allows an iterable object to expand in places where more than zero arguments are expected

// make my string into a array of characters
function makeToArray(){

    let name = "Shawn";
    let chars = [...name];
    
    console.log(chars);
}

function arrayConcat(){
    let names = ["Shawn", "Zyra", "Steven", "Mike"];
    let added = [...names, "Sudaria", "Dauplo", "Sabalza"];

    console.log(added[2]);
}


function misc(){
    let names = ["Shawn", ..."Zyra", "Steven", "Mike"];
    console.log(names);

}

    