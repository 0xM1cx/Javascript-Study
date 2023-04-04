function containsDuplicate(nums: number[]): boolean {
    let tempArray:number[] = [];  
    for (let element of nums){
        if (nums.includes(element)){
            return true;
        }else{
            tempArray.push(element);
        }
    }

    return false
};


console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
