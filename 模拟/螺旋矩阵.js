function luoxuanMat(arr) {
    //当前未遍历的最小最大边
    // 当前该走的行列
    var len = arr.length
    var min = 0
    var max = len - 1
    var row = 0, col=0
    var res = []
    for (var i=0;i<len*len;i++) {
        res.push(arr[row][col])
        if(row==min && col<max){
            col = col +1
        }
        else if(col==max && row<max){
            row = row + 1
        }
        else if(row==max && col>min){
            col = col - 1
        }
        else if(col==min && row>min){
            row = row -1
        }
        //更新环
        if(col==min && row-1 == min){
            min = min + 1
            max = max - 1
        }
    }
    return res
}

var a = [[1,2,3],[4,5,6],[7,8,9]]
console.log(luoxuanMat(a))
