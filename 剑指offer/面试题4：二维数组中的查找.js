//每次选择数组右上角的数字；（右上角的数字具备：是那1行最大的，是那1列最小的）
/*
* 如果该数字大于val：则剔除所在列
* 如果该数字大于val：则剔除所在行
* */
function planarArrFind(arr,val) {
    var  row = arr.length
    var  col = arr[0].length
    if(row>0 && col>0){
        var x = 0
        var y = col-1
        while (x<=row && y>=0) {
            var num = arr[x][y]
            if(arr[x][y] == val){
                return {x,y}
            }
            else if(arr[x][y] < val){
                x = x+1
            }
            else{
                y = y-1
            }
        }
        return -1
    }
}


var arr = [
    [1,3,4,7],
    [2,4,6,8],
    [3,5,7,11]
]

console.log(planarArrFind(arr,7))
