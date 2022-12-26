/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = getFrequencyMap(nums);
    const bucket = getBucket(nums, map);
    
    return getTopK(bucket, k);
};

var getFrequencyMap = (nums) => {
    const map = {};
    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    return map;
};

const getBucket = (nums, map) => {
    // create array with empty values of the length of nums
    const bucket = new Array(nums.length + 1).fill().map(() => []);
    
    for (const [ num, count ] of Object.entries(map)) {
        bucket[count].push(num);
    }
    
    return bucket.reverse(); // O(n) time
};

var getTopK = (bucket, k, topK = []) => {
    for (const count of bucket) {
        for (const num of count) {
            const isAtCapacity = topK.length === k;
            if (isAtCapacity) break;
            
            topK.push(num);
        }
    }
    return topK;
}