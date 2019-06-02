function threeSumCloest(nums,target) {
    var len = nums.length
    nums.sort(compare)
    var l,r
    var res = 1000,ans = 0
    // 第一次固定循环
    for(var i=0;i<len;i++){
        l = i+1
        r = len-1
        while (l<r) {
            var sum = nums[i]+nums[l]+nums[r]
            diff = target-sum
            if(diff == 0){
                return target
            }
            else if(diff<0){
                r = r-1
            }
            else{
                l = l+1
            }
            if(Math.abs(diff)<res){
                res = Math.abs(diff)
                ans = sum
            }
        }
    }
    return ans
}

function compare(val1,val2) {
    if (val1<val2){
        return -1
    }
    else if(val1>val2){
        return 1
    }
    else{
        return 0
    }
}

nums = [-1, 2 ,1,4]
console.log(threeSumCloest(nums,1))