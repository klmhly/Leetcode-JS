// 其余元素成对出现
// 2 异或 2 = 0
// 1 异或 0 = 1

function singleNum(nums) {
    var res = 0
    for(var i=0;i<nums.length;i++){
        res = res ^ nums[i]
    }
    return res
}

console.log(singleNum([2,2,1,1,4]))