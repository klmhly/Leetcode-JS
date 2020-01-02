/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I' : 1,
        'IV' : 4,
        'V' : 5,
        'IX' : 9,
        'X' : 10,
        'XL' : 40,
        'L' : 50,
        'XC' : 90,
        'C' : 100,
        'CD': 400,
        'D' : 500,
        'CM' : 900,
        'M' : 1000
    }
    let res = 0
    for(let i=0; i<s.length; ){
        if((i+1<s.length) && map[s.substr(i,2)]) {
            res += map[s.substr(i,2)]
            i = i+2
        } else {
            res += map[s[i]]
            i = i+1
        }
    }
    return res
};

console.log(romanToInt("MCMXCIV"))