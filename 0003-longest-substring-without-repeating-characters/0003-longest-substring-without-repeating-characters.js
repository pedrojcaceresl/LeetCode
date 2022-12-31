/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let count = 0;
    let max = 0;
    
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[count]);
            count++;
        }
        
        set.add(s[i]);
        max = Math.max(max, set.size);
    }
    
    return max;
};