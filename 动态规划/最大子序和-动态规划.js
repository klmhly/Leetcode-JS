// 动态规划：
// 状态方程：sum[i] = Math.max(sum[i-1]+nums[i],nums[i])

function maxSubSum(nums) {
    var res = nums[0]
    var sum = 0
    // sum[0] = 0
    for(var i=1;i<=nums.length;i++){
        sum = Math.max(sum+nums[i],nums[i])
        if(sum>res){
            res = sum
        }
    }
    return res
}

s = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubSum(s))
