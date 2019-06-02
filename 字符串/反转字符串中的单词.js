// 反转一个字符串数组
function reverseStr(s) {
    var len = s.length
    var s = s.split('')
    var temp
    var mid = parseInt((len-1)/2)
    for(var i=0; i<=mid; i++){
        j = len-1-i
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
    s = s.join('')
    return s
}

function reverseWord(str) {
    var arr = str.split(' ')
    var res = []
    for(var i=0; i<arr.length; i++){
        var temp = reverseStr(arr[i])
        res.push(temp)
    }
    res = res.join(' ')
    return res
}

var s = 'hello my is'

console.log(reverseWord(s))