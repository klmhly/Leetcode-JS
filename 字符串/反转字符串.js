function reverseStr(s) {
    var len = s.length
    var arr = s.split('')
    var temp
    var mid = parseInt((len-1)/2)
    for(var i=0; i<=mid; i++){
        j = len-1-i
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr.join('')
}

var a = reverseStr(b)
console.log(a)
