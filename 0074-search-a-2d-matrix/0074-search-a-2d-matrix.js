/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
      const myArray = matrix.flat(Infinity);
      return binarySearch(myArray, target) != -1;
};


const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let middle = 0;
    
    while (right >= left) {
        middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        
        if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}