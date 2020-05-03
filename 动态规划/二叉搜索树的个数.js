/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var numTrees = function(n) {
    let G = new Array(n+1).fill(0)
    G[0] = 1
    G[1] = 1
    for(let i=2; i<=n; i++){
        for(let j=1; j<=i; j++) {
            G[i] += G[j-1]*G[i-j]
        }
    }
    return G[n]
};


let n = 3
console.log(numTrees(3))