/*因为整数不可遍历（not iterable），故先需将整数转换为字符串，从而为可遍历（iterable）对象，
然后倒序遍历字符串，依次将值压入（push）结果数组中。
然后，我们需要判断是否包含符号位。如果有符号位，就将该符号位放入结果数组的头部（head），若无符号位，则将最后一位压入结果数组中。
将结果数组转换为整数，并判定其是否在指定范围内，若在，则返回该值，否则返回0。*/

function reverse(num) {
    var resArr = []
    var resNum
    var s = num.toString()
    for(var i = s.length-1;i>0;i--){
        resArr.push(s[i])
    }
    if(s[0]=='-'){
        resArr.unshift('-')
    }
    else{
        resArr.push(s[0])
    }

    resNum = parseInt(resArr.join(''))

    if(resNum<Math.pow(-2,31)||resNum>Math.pow(2,31)){
        return 0
    }
    return resNum
}


console.log(reverse(-123))