/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let dp = [0];
    
    for (let i = 1; i < (n + 1); i++) {
        const [ mid, bit ] = [ (i >> 1), (i & 1)];
        const bits = (dp[mid] + bit);
        
        dp.push(bits);
    }
    
    return dp;
};