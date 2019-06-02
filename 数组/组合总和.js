function sum(candidate,target) {
    var nums = candidate
    nums.sort(compare)
    var res = []
    var temp = []
    combined(nums,0,target,res,temp)
    function combined(nums,start,target,res,temp) {
        if(target<0){ return}
        if(target==0){
            temp = temp.slice()
            res.push(temp)
            return
        }
        for (var i=start; i<nums.length; i++) {
            temp.push(nums[i])
            combined(nums,i,target-nums[i],res,temp)
            temp.pop()
        }
    }
    return res
}


function compare(val1,val2) {
    if(val1<val2){
        return -1
    }
    else if(val1>val2){
        return 1
    }
    else{
        return 0
    }
}

nums=[2,3,4,5]
res = sum(nums,7)
console.log(res)