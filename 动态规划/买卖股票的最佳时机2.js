//不限交易次数
function maxProfit(nums) {
    var max =0
    for (var i=0; i<nums.length; i++) {
        if(nums[i]<nums[i+1]){
            max=max+nums[i+1]-nums[i]
        }
    }
    return max
}

s = [7,1,5,3,6,4]
s2 = [3,2,1]
console.log(maxProfit(s2))