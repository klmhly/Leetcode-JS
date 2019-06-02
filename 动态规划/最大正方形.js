//dp[i][j]:以（i，j）为右下角的正方形的最大面积
//dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1])+1
var maximalSquare = function(matrix) {
    if(matrix.length==0) return 0
    var l1 = matrix.length
    var l2 = matrix[0].length
    if(l2==0) return 0
    var dp = new Array(l1).fill([])
    var res = 0
    for(var i=0; i<l1; i++){
        dp[i] = new Array(l2)
        for(var j = 0; j<l2; j++){
            if(j==0 && matrix[i][0]=='1') {
                dp[i][j]=1
                res =1
            }else if(i==0 && matrix[i][j]=='1'){
                dp[i][j]=1
                res = 1
            }
            else{
                dp[i][j]=0
            }
        }
    }

    console.log(dp)
    for(var i=1; i<l1; i++){
        for(var j=1; j<l2; j++){
            if(matrix[i][j]=='1'){
                dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1])+1
            }
            if(dp[i][j]>res){
                res = dp[i][j]
            }
        }
    }
    return res*res
};
var a = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
console.log(maximalSquare(a))
