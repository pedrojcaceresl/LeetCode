/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  result = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        result += i - nums[i];
    }
    
    return result;
};