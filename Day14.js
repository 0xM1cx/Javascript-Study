// Methods
var total = 0
const student = {
    name: "Shawn",
    age: "18",
    school: "EVSU",
    total_funds: function(income_source) {
        income_source.forEach(element => {
            total += element;
        });

        return total;
    }
    }




console.log(`Shawn total funds are ${student.total_funds([213, 12, 41, 31])}`);