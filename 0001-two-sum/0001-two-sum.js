/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (arr, target) => {
    let obj = {};
    let complement = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        complement = target - element;
        if (obj[complement] !== undefined) {
            return [obj[complement], i];
        }
        
        obj[arr[i]] = i;
    }
    return -1;
}