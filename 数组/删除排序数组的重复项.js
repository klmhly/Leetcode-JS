function removeDup(nums) {
    var len = nums.length
    for(var i=1; i<len; i++){
        if(nums[i]==nums[i-1]){
            nums.splice(i,1)
            len = len-1;
            i = i-1
        }
        else{
            i = i+1
        }
    }
}

nums = [1,1,2]
removeDup(nums)
console.log(nums)