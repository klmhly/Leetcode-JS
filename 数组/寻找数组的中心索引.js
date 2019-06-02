// 计算数组总和
// 每次遍历左和增加，判断  右和 == 总和-左和- 当前值

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumC = 0
    for(let j=0;j<nums.length;j++){
        sumC += nums[j]
    }

    var leftSum = 0
    for(var i = 0; i<nums.length; i++){
        console.log(sumC,leftSum)
        if(leftSum == (sumC-nums[i])/2){
            return i
        }
        else{
            leftSum += nums[i]
        }
    }
    return -1
};

var s = [1,7,3,6,5,6]
console.log(pivotIndex(s))