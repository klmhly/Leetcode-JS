let N = 10
let m = 5
let val = []
let weight = []
for(let i=0; i<=m; i++){
    val[i] = [0,0,0]
    weight[i] = [0, 0, 0]
}

let test = [[8, 2, 0], [4, 5, 1], [3, 5 ,1], [4, 3, 0], [5 ,2 ,0]]
for(let i=1; i<=m; i++){
    let line = test[i-1]
    let v = line[0]
    let p = line[1]
    let q = line[2]
    if(q === 0){
        val[i][0] = v
        weight[i][0] = p
    }else{
        if(val[q][1] === 0){
            val[q][1] = v
            weight[q][1] = p
        } else {
            val[q][2] = v
            weight[q][2] = p
        }
    }
}

// 动规划数组初始化
let dp = new Array(m+1)
for(let i=0; i<dp.length; i++){
    dp[i] = new Array(N+1).fill(0)
}

// 动归过程
for(let i=1; i<=m; i++){
    for(let j=1; j<=N; j++){
        if(val[i][0]<=j){
            // 只买主件
            dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-val[i][0]] + val[i][0]*weight[i][0])
            if(val[i][0] + val[i][0] <= j){
                //  买主件+附件1
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-val[i][0]-val[i][1]] + val[i][0]*weight[i][0] + val[i][1]*weight[i][1])
            }
            if(val[i][0] + val[i][1] <= j){
                // 买主+附件2
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-val[i][0]-val[i][2]] + val[i][0]*weight[i][0] + val[i][2]*weight[i][2])
            }
            if(val[i][0] + val[i][1] + val[i][2]<=j){
                // 主 + 附1 + 附2
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-val[i][0]-val[i][1]- val[i][2]] + val[i][0]*weight[i][0] + val[i][1]*weight[i][1] + val[i][2]*weight[i][2])
            }
        }else{
            dp[i][j] = dp[i-1][j]
        }
    }
}

console.log(dp[m][N])

