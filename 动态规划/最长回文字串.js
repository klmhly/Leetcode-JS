//  二维数组动态规划存放从（i，j）是不是回文子串；
//同时更新寻找最长的

function longestPalind(s) {
    var str = s
    var l = s.length
    var res
    var start = 0,end=0,long=0

    // 初始化二维数组
    var dp = new Array(l)
    for(var i=0; i<l; i++){
        dp[i] = new Array(l)
        for(var j=0;j<l;j++){
            if(i==j){
                dp[i][j] = 1
            }
            else{
                dp[i][j] = 0
            }

        }
    }

    //遍历更新状态
    for(var gap=2; gap<=l;gap++){
        for(var i=0; i<l-gap+1;i++){
            j = i+gap-1
            if(gap==2){
                if(str[i]==str[j]){
                    dp[i][j] = 1
                }
            }
            else{
                if(str[i]==str[j]){
                    dp[i][j] = dp[i+1][j-1]
                }
                else{
                    dp[i][j] = 0
                }
            }
            if(dp[i][j] == 1){
                if (gap >long){
                    long = gap
                    start = i
                    end = j
                }
            }
        }
    }
    res = str.slice(start,end+1)
    return res
}

s = 'a'


console.log(longestPalind(s))
