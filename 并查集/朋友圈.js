/**
 * @param {number[][]} M
 * @return {number}
 */
// 并茶集：关键步骤，查找与合并

var findCircleNum = function(M) {
    
    let len = M.length
    let father = new Array(len)

    let res = len
    // 初始集  
    for(let i=0; i<len; i++){
        father[i] = i
    }
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++) {

            if(M[i][j] ===1 && find(father,i) !== find(father,j)){
                union(father, i, j)
                res -- 
            }
        }
    }
    return res
};

// 查找
function find(arr, i){
    if(arr[i] === i) {
        return i
    } else {
        return find(arr, arr[i])
    }   
}

// 合并
function union(arr, a, b){
    let root_a = find(arr, a)
    let root_b = find(arr, b)
    if(root_a !== root_b) {
        arr[root_a] = root_b
    }
}

let M =[[1,1,0],[1,1,0],[0,0,1]]

console.log(findCircleNum(M))