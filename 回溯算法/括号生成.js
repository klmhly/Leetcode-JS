// n代表能生成括号的对数，使其能够生成所有kennel的并且有效的括号组合
/*
* 如果左括号还有剩余，则可以放置左括号；
* 如果右括号的剩余数大于左括号，则可放右括号。
* */
function generate(left,right,str,res) {
    if (left==0 && right==0){
        res.push(str)
        return
    }
    if(left>0){
        generate(left-1,right,str+'(',res)
    }
    if(right>left){
        generate(left,right-1,str+')',res)
    }
}

function generateCount(n) {
    res = []
    generate(n,n,'',res)
    return res
}

res = generateCount(3)
console.log(res)