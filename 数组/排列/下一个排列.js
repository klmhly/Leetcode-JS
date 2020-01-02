//从后往前找递增序列，直到不递增了，拿到它前一个数然后和递增序列里最小的值交换
//然后反转后面的序列

function order(nums) {
    let len = nums.length
    let temp
    //倒着遍历找到了增序的最大值
    let k = len-1

    while(k>0 && nums[k]<=nums[k-1]){
        k--
    }
    if(k==0){
        nums.reverse()
        return nums
    }
    temp = nums[k-1]
    let i = len-1
    while(nums[i]<=temp){
        i--;
    }
    nums[k-1] = nums[i]
    nums[i] = temp

    // fanzhuan houban bufen
    let nums1 = nums.slice(0,k)
    let nums2 = nums.slice(k)
    nums2.reverse()
    // let res= nums1.concat(nums2)
    // return res
    nums.splice(k,nums2.length,...nums2)
    return nums
}

nums = [1,5,1]
console.log(order(nums))
