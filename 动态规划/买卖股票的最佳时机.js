function maxProfit(nums) {
    var diff = []
    var sum = []
    sum[0] = 0
    for(var i=1; i<=nums.length;i++){
        diff[i-1] = nums[i]-nums[i-1]
    }
    var res = diff[0]
    for(var i=1;i<=diff.length;i++){
        sum[i]=Math.max(sum[i-1]+diff[i],diff[i])
        if(sum[i]>res){
            res = sum[i]
        }
    }
    if(res<0){
        return 0
    }
    else{
        return res
    }

}

console.log(maxProfit([3,1,5,4,3,2]))