/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let added_arr = [];
    for(let i = 0; i < nums.length; i++)
    {
        let sum = 0;
        let new_arr = nums.slice(0, i+1);
        new_arr.forEach((num) => {
            sum += num;
        });

        added_arr.push(sum);
    }

    console.log(added_arr);
};

runningSum([1,1,1,1,1])