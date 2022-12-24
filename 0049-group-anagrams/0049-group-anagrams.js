/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs, map = new Map()) {
    
    if (!strs) return [];
    groupWords(strs, map)
    
    return [...map.values()];
};



const groupWords = (words, map) => {
    for (const original of words) {
        const sorted = reorder(original);
        const values = map.get(sorted) || [];
        
        values.push(original);
        map.set(sorted, values);
    }
}

const reorder = str => str.split('').sort((a,b) => a.localeCompare(b)).join('');