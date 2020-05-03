//  回溯法

function generate(n) {
    let res = []

    function backtrack(path='', left=0, right=0){
        if(path.length === 2*n){
            res.push(path)
            return
        }
        if(left<n){
            backtrack(path+'(', left+1, right)
        }
        if(right<left) {
            backtrack(path+')', left, right)
        }
    }

    backtrack()
    return res
}

console.log(generate(3))