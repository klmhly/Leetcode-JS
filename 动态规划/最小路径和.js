var minPathSum = function(grid) {
    var l1 = grid.length
    var l2 = grid[0].length
    var dp = new Array(l1)
    for(var i=0; i<l1; i++){
        dp[i] = new Array(l2)
    }
    dp[0][0] = grid[0][0]

    //第一列
    for(var i=1; i<l1; i++){
        dp[i][0] = dp[i-1][0]+grid[i][0]
    }

    //第一行
    for(var i=1; i<l2; i++){
        dp[0][i] = dp[0][i-1]+grid[0][i]
    }

    for(var i=1; i<l1; i++){
        for(var j=1; j<l2; j++){
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]
        }
    }
    return dp[l1-1][l2-1]
};
