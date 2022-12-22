/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//  var hammingWeight = function(n) {
//     let [ bits, mask ] = [ 0, 1 ]
    
//     for (let i = 0; i < 32; i++) {
//         const hasBit = ((n & mask) !== 0)
//         if (hasBit) bits++
        
//         mask <<= 1
//     }
    
//     return bits
// };

var hammingWeight = function(n, sum = 0) {
    while (n !== 0) {
        n &= (n - 1)
        sum++
    }
    
    return sum
}