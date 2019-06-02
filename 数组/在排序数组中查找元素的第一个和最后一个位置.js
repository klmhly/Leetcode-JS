function searchRange(nums,s,l,target) {
    var start,end
    var mid = parseInt((l-s)/2)
    while(s<l){
        if(nums[mid]==target){
            var j = mid+1
            var i = mid-1
            while(nums[j]==target && j<=l){
                j++
            }
            while (nums[i]==target && i>=0){
                i--
            }

            return [i+1,j-1]
        }
        else if(nums[mid]>target){
            l = mid - 1
        }
        else{
            s = mid+1
        }
        searchRange(nums,s,l,target)
    }
}

nums=[4,4,4,4,4,4,4]
console.log(searchRange(nums,0,6,4))