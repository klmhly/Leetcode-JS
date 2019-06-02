var swap = function(nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j]  = tmp;
}

var dfs = function(result, nums, start) {
    //出口条件
    if (start === nums.length) {
        result.push([...nums]);
    }

    for (let i = start; i < nums.length; i++) {
        swap(nums, start, i); //剩余数组中的元素，分别于剩余数组中第一个元素，交换，那么剩下的进行递归的全排列； 剩余数组会逐渐减小至没有
        dfs(result, nums, start + 1);
        //交换回来，因为在dfs嵌套中，序列是被改变了的，所以，在返回到外一层嵌套的时候，需要将数组复位
        swap(nums, start, i);

    }
}

var permute = function(nums) {
    let result = [];
    dfs(result, nums, 0);
    return result;
};


var a = [1,2,3]
console.log(permute(a))
