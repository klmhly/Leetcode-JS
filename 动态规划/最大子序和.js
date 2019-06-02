//  数组前缀和，最大序列和，一定是前缀和减去，前缀和里面最小的和
//  循环的通时，比较当前更新当前的最大和，以及最小和

function maxSubSum(nums) {
    // 初始化最大res，为数组的第一项
    var sum = []
    sum[0]=0
    var lmin = 0, res = nums[1]

    for (var i=1;i<=nums.length;i++){
        sum[i] = sum[i-1]+nums[i-1]
        if(sum[i]-lmin>res){
            res = sum[i]-lmin
        }
        if(nums[i]<lmin){
            lmin = nums[i]
        }
    }
    return res
}

w = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubSum(w))