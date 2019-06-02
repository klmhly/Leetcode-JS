//O(N*log(N))

// 维护一个结果数组（递增），
//遍历原来的数组，每次遇到比结果数组大的
function LIs(arr) {
    if(!arr){
        return
    }
    //res里面放的是最长递增子序列
    var res = []
    res[1]= arr[0]
    var len = 1
    for(var i=1; i<arr.length; i++){
        if(arr[i]>res[len-1]){
            res[len] = arr[i]
            len = len+1
        }else{
            var index = BinarySearch(res,arr[i])
            res[index] = arr[i]
        }
    }
    return len
}


function BinarySearch(arr,len,key) {
    var l = 0
    var r = len-1
    var mid = parseInt((l+r)/2)
    while(l<=r){
        if(arr[mid]>key){
            l = mid-1
        }else if(arr[mid]){
            r = mid+1
        }else{
            return mid
        }
    }
    return l
}

console.log(LIs([1,3,2,4,2,5,6]))
