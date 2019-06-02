// 以第一个单词为基准，第一层循环每次取该基准一个元素
// 第二层循环遍历每个单词，只要有单词不满足情况，就结束。
// 第二层循环结束了，没有跳出，说明所有字符串都满足。加入该字符

function longestCommonPre(strs){
    var s = ''
    var base = strs[0]
    for(let i=0; i<base.length; i++){
        for(var str of strs){
            if(i>str.length-1){
                return s
            }
            if(base[i]!=str[i]){
                return s
            }
        }
        s=s+base[i]
    }
    return s
}

strs = ['abs','abds','aebc']
console.log(longestCommonPre(strs))
