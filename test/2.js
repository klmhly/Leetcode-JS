const readline = require('readline')

let map = {
    a:'bcd',
    b:'123'
}

function parse(str) {
    var arr = str.split('')
    console.log(arr)
    var l = arr.length
    var k
    for (var i=0; i<l; i++){
        k = arr[i]
        if(map[k]){
            arr[i] = map[k]
        }
    }
    res = arr.join('')
    return res
}

a = process.stdin.pause()
console.log(a)

// str = 'abc'
// console.log(parse(str))