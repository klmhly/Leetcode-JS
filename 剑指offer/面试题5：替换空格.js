// 方法1，正则
function zhengze(str,str1) {
    return str.replace(/\s/g,str1)
}
console.log(zhengze(str,str1))


//方法2：
/*
1，统计空格个数
2，字符串转数组，且计算转后的实际长度
3，双指针，一个遍历字符串，一个指向扩充后的最后一个可以放的位置
*/
function replaceSpace(s, str1) {
    var l1 = s.length
    var str = s.split('')
    var cnt = 0

    // 统计空格数量
    for (var i=0; i<l1; i++) {
        if(str[i]== ' '){
            cnt++
        }
    }

    //从尾部遍历
    var l2 = l1 + cnt * (str1.length-1)
    for (var i = l1-1; i>=0 ; i--) {
        if(str[i] == ' '){
            for(var j=0; j<str1.length ; j++){
                str[--l2] = str1[j]
            }
        }else{
            str[--l2] = str[i]
        }

    }
    return str.join('')
}

var str = '12 3 q'
var str1 = '%20'
console.log(replaceSpace(str,str1))






