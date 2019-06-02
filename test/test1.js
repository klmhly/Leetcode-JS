
function find(arr,arrLen,value) {
    var index = -999
    var start = 0
    var mid = parseInt((start+arrLen-1)/2)

    while(start<=arrLen){
        if(arr[mid] == value){
            return mid
            break
        }
        else if(value < arr[mid]){
            arrLen = mid-1
        }
        else{
            start = mid+1
        }
        mid = parseInt((start+arrLen)/2)
    }
    return -999
}

//测试
arr = [21,12,11,9,10,12,13]
console.log(find(arr,arr.length,1))
