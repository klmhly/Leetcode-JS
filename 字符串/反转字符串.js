function reverseStr(s) {
    var len = s.length
    var temp
    var mid = parseInt((len-1)/2)
    for(var i=0; i<=mid; i++){
        j = len-1-i
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
}

s = ['h', 'e', 'l', 'l', 'o']
b ='iuo'
reverseStr(b)
console.log(b)
