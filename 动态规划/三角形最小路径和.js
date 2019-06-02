var minimumTotal = function(triangle) {
    if(triangle.length==0) return 0
    // if((triangle.length==1) return Math.min.apply(null,triangle[0])
    var dp = triangle[triangle.length-1]
    for(var i = triangle.length-2; i>=0; i--){
        for(var j=0; j<triangle[i].length; j++){
            dp[j] = Math.min(dp[j],dp[j+1])+triangle[i][j]
        }
    }
    return dp[0]
};

var a = [[2]]
console.log(minimumTotal(a))
