function twoSum(nums,target) {
    var hash = {}
    for (let i=0; i<nums.length; i++) {
        var diff = target-nums[i]
        if(nums[i] in hash){
            return [hash[nums[i]],i]
        }
        else{
            hash[diff] = i
        }

    }
}

var nums = [2,7,11,15]
console.log(twoSum(nums,9))