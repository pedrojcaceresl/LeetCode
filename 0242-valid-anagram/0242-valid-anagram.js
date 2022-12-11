/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let obj = {};
    let obj2 = {};
    let len = null;
    let match = 0;
    // count the frequency
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) + 1; 
    }

    // count the frequency
    for (let j = 0; j < t.length; j++) { 
        obj2[t[j]] = (obj2[t[j]] || 0) + 1; 
    }

    //check if they're of thesame length
    if(Object.keys(obj).length != Object.keys(obj2).length){
        return false;
    }else{
        len = Object.keys(obj).length; //use any length
    }

for (const [key, value] of Object.entries(obj)) {
    console.log(value, obj2[key])
  if (value == obj2[key]) {
    match++;
  } 
}
if (len != match) return false;
else return true;

};