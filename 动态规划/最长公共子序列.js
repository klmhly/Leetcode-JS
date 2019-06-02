// 二维数组存放分别以第一个子串以i结尾，第二个子串以j结尾的两个字串的最长公共子序列
var s = []
function Lcs(a,b) {
    let len1 = a.length+1
    let len2 = b.length+1
    let res = new Array(len1)
    for (let i= 0; i<len1;i++) {
        res[i]=new Array(len2)
        for(let j=0;j<len2;j++){
            res[i][j] = 0
        }
    }

    for(let i=1;i<len1;i++){
        for (let j=1;j<len2;j++){
            if(a[i-1] == b[j-1]){
                res[i][j] = res[i-1][j-1] +1
            }
            else{
                res[i][j] = Math.max(res[i][j-1],res[i-1][j])
            }
        }
    }
    // console.log(res)
     return res[len1-1][len2-1]
}


a = 'abcdefgo'
b = 'acegf9'
console.log(Lcs(a,b))
