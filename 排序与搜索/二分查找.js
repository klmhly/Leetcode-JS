// 指定（log n):二分查找
// 

function binarySearch(arr,l,r,target) {
    var index = -1
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
arr = [1,2,5,7,9,10,12]
console.log(binarySearch(arr,0,arr.length,1))