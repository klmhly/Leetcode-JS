//旋转，其实是两个有序数组，重点在于如何找到分界点

function search(arr,target) {
    // 先找分界点
    var res
    var l = 0
    var r = arr.length-1
    var indexMid = l
    var mid = parseInt((l+r)/2)
    while (arr[l]>arr[r]) {
        if(r-l ==1){
            indexMid = r
            break
        }
        indexMid = parseInt((l+r)/2)
        if(arr[indexMid]>=arr[l]){
            l = indexMid

        }
        else if(arr[indexMid]<=arr[r]){
            r = mid
        }
    }

    res = binarySearch(arr,0,r-1,target)
    if(res==-1){
        res = binarySearch(arr,r,arr.length-1,target)
    }
    return res
}

// 二分查找
function binarySearch(arr,l,r,target) {
    mid = parseInt((l+r)/2)
    while(l<=r){
        if(arr[mid] == target){
            return mid
            break
        }
        else if(target < arr[mid]){
            r = mid-1
        }
        else{
            l = mid+1
        }
        mid = parseInt((l+r)/2)
    }
    return -1
}

var arr = [5,6,7,1,2,3,4]
console.log(search(arr,4))