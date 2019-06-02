function fib(n) {
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    else{
        return fib(n-1)+fib(n-2)
    }
}

console.log(fib(40))


// 更好的解法，自底向上：O（n）
function fiblic(n) {
    var res = [0, 1]
    if(n<2){
        return res[n]
    }
    var sumOne = 0+1
    var sumTwo = 0
    var nSum = 0
    for(var i = 2; i<=n; i++){
        nSum  = sumOne+sumTwo
        sumTwo = sumOne
        sumOne = nSum
    }
    return nSum
}
//
// console.log(fiblic(2))
