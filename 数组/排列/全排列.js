var permute = function(nums) {
    var res = []
    dfs(nums,res,0)
    return res

};

function swap(nums,i,j){
    [nums[i],nums[j]] = [nums[j],nums[i]]
}

function dfs(nums,res,start){
    if(start==nums.length){
        res.push([...nums])
    }
    for(var i=start;i<nums.length;i++){
        swap(nums,i, start)
        dfs(nums,res,start+1)
        swap(nums,i,start)
    }
}

console.log(permute([1,2,3]))
