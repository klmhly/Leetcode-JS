//回文是指从正序和倒序读是一样的数

//转字符串解决
function isPalindRome(num) {
    var res = true
    var str = num.toString()
    for(var i=0,len=str.length;i<(len-1)/2;i++){
        if(str[i]!=str[len-i-1]){
            res = false
            break
        }
    }
    return res
}

console.log(isPalindRome(8448))
console.log(isPalindRome(-12))