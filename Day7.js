// example of a recursive function that would count down the value to 1.

function countDown(number) {
    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    //base case
    if (newNumber > 0){
        countDown(newNumber);
    }
}

function accessingObjectProperties() {
    var profile = {
        name: "Shawn Michael Sudaria",
        age: 17,
        future_career: 'Cybersecurity Engineer'
    };

    console.log(`Welcome ${profile.name}`);
    console.log(`Just to confirm you are now ${profile.age} and in the future you want to be a ${profile.future_career}`);

}

accessingObjectProperties();
