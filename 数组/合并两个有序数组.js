function merge(nums1,m,nums2,n) {
    var i = m-1
    var j = n-1
    var tail = m+n-1
    while(i>=0 && j>=0){
        if(nums2[j]>nums1[i]){
            nums1[tail] = nums2[j]
            j = j -1
        }
        else{
            nums1[tail] = nums1[i]
            i = i-1
        }
        tail = tail -1
    }
    if(j>0){
        for(tail;tail>=0;tail--){
            nums1[tail] = nums2[j]
            j = j-1
        }
    }
}

nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
merge(nums1,3,nums2,3)
console.log(nums1)