/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (arr, target) => {
    let obj = {}
    let complement = 0;
    
    for(let i = 0; i <= arr.length; i++) {
        complement = target - arr[i]
        if(obj.hasOwnProperty(complement)) {
            return [obj[complement], i];
        }
        obj[arr[i]] = i;
    }
}