function qianwei(num){
    var str = num.toString()
    var k = 0
    var res = ''
    for (var i = str.length-1; i>=0; i--) {
        k++
        if(k%3==0 & i!=0){
            res += str[i]+','
        }
        else{
            res += str[i]
        }
    }
    return res.split('').reverse().join('')
}

var a = 12345
console.log(qianwei(a))