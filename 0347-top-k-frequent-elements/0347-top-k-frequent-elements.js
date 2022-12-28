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
    let map = {};
    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    return map;
}

var getBucket = (nums, map) => {
  const bucket = new Array(nums.length + 1).fill().map(() => []);

  // fill the bucket with the values of the map;
  for (const [num, count] of Object.entries(map)) {
    bucket[count].push(num);
  }

  return bucket.reverse(); // O(n) time
}

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