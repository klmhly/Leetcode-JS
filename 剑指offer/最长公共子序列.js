
function longestSub(a,b) {
    var l1 = a.length+1
    var l2 = b.length+1

    // 初始化二维数组
    var dp = new Array(l1)
    var res = new Array(l1)
    for(var i=0; i<l1; i++){
        dp[i] = new Array(l2)
        res[i] = new Array(l2)
        for(var j=0; j<l2; j++){
            dp[i][j] = 0
            res[i][j] = 0
        }
    }

    for(var i=1; i<l1; i++){
        for(var j=1; j<l2; j++){
            if(a[i-1]==b[j-1]){
                dp[i][j] = dp[i-1][j-1] +1
                res[i][j] =1
            }
            else if(dp[i-1][j]>dp[i][j-1]){
                dp[i][j] = dp[i-1][j]
                res[i][j] =2
            }else {
                dp[i][j] = dp[i][j-1]
                res[i][j] =3
            }
        }
    }

    var str =''
    var i=l1-1,j=l2-1
    while(i>0){
        if(res[i][j]==1){
            str = a[i-1] +str
            i--
            j--
        }else if(res[i][j]==2){
            i--

        }else{
            j--
        }
    }
    console.log(str)
    return dp[l1-1][l2-1]
}

a = 'abcdefo'
b = 'acegf9'
console.log(longestSub(a,b))
