//假设返回0代表错误
var s = [1,1,1,1,1,0,0,0,0,0]
function isBug(Sn) {
    return Sn
}

//二分查找思想
function binarySearch(arr){
    var l = 0
    var r = arr.length-1
    if(l>r){
        return
    }
    var mid = parseInt((l+r)/2)
    while (l<=r) {

        if(isBug(arr[mid])==0 & isBug(arr[mid-1])!=0){
            return mid+1
            break
        }
        else if(isBug(arr[mid])==0){
            r = mid-1
        }
        else{
            l = mid+1
        }
        mid = parseInt((l+r)/2)
    }
    return -1
}

console.log(binarySearch(s))
