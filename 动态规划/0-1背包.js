function bag(weights,values,w) {
    var n = weights.length
    var dp = new Array(n)
    dp[-1] = new Array(w+1).fill(0)
    for(var i=0; i<n; i++){
        dp[i] = new Array(w).fill(0)
        for(var j=0; j<=w; j++){
            if(j<weights[i]){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-weights[i]]+values[i])
            }
        }
    }
    return dp[n-1][w]
}


console.log(bag([3,4,5],[4,5,6],10))

