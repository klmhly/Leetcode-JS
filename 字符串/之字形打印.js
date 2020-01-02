var convert = function(s, numRows) {
    var res = new Array(numRows).fill('')
    var k = 0
    var flag = 1
    for(var i=0; i<s.length; i++){
        res[k] += s[i]
        if(k==0){
            flag = 1
        }
        if(k==numRows-1){
            flag = -1
        }
        k = k+flag
    }
    res = res.join('')
    return res
};

s = "ab", numRows = 1
console.log(convert(s,numRows))
