//解法1：排序
//解法2：哈希

function findRepeat(arr) {
    var obj = {}
    for(let i=0; i<arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        }else{
            console.log(arr[i])
            return
        }
    }
}

var arr = [1,4,2,6,6]
findRepeat(arr)
