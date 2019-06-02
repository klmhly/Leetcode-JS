function binarySearch(arr,l,r,val){
    if(l>r){
        return
    }
    var mid = parseInt((l+r)/2)
    while (l<=r) {
        if(arr[mid]==val){
            return mid
            break
        }
        else if(val<arr[mid]){
            r = r-1
        }
        else{
            l = l+1
        }
        mid = parseInt((l+r)/2)
    }
    return -1

}

arr = [1,3,5]
console.log(binarySearch(arr,0,2,9))


