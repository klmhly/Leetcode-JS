function threeSum(nums,target) {
    var numArr = nums.slice()
    var len = numArr.length
    var hash = new Map()
    // 对数组排序
    numArr.sort(compare)
    var left,right
    var res = []

    // 第一层固定循环
    for(var i=0; i<len; i++){
        left = i+1
        right = len-1
        var diff = target-numArr[i]

        // 第二层左右指针循环
        while(left<right){
            var sum = numArr[left]+numArr[right]
            if(sum == diff){
                //加入结果之前先判断是否存在
                if(!hash[[numArr[i],numArr[left],numArr[right]]]){
                    res.push([numArr[i],numArr[left],numArr[right]])
                    hash[[numArr[i],numArr[left],numArr[right]]] = true
                }
                left++
            }
            else if(sum>diff){
                right--
            }
            else{
                left++
            }
        }
    }
    return res
}

function compare(v1,v2){
    if(v1<v2){
        return -1
    }
    else if(v1>v2){
        return 1
    }
    else {
        return 0
    }
}

nums = [-1, 0 ,1,2,-1,-4]
console.log(threeSum(nums,0))