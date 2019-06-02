// 用一个行走的指针判断每个字符是否满足条件
function strToNum(s){
    if(s.length<1){
        return 0
    }
    var sum = 0
    var i = 0  //指针索引
    var flag = 1 //正负
    //i，走到第一个非空元素
    while (s[i] == ''){
        i++
    }
    //符号判断
    if(s[i]=='-'){
        flag = -1
        i = i+1
    }
    while(i<s.length && s[i]>'0' && s[i]<'9'){
        sum = sum*10+ (s[i]-'0')
        i = i+1
    }
    sum = sum*flag
    if(sum<Math.pow(-2,31)&&sum>Math.pow(2,31)){
        sum = Math.pow(-2,31)
    }
    return sum
}

s = '42'
console.log(strToNum(s))