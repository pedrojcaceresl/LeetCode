/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [left, right, max] = [0, 1, 0];
    
    while (right < prices.length) {
        
        if (prices[right] <= prices[left]) left = right;
        
        const window = prices[right] - prices[left];
        
        max = Math.max(max, window)
        
        right++;
    }
    
    return max;
};

// len 5
// [7,1,5,3,6,4]
// left     0 1
// right    1 2 3 4 5
// max      0 4 4 5
// window   0 4 2 5
