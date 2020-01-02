var threeSum = function(nums) {
    let res = []
    let obj = {}
    nums.sort((x, y) => x-y)
    let len = nums.length
    if(nums[0]<= 0 && nums[len-1]>=0)
    {
        for(let i=0; i< len; i++) {
            let l = i+1
            let r = len-1
            while(l<r) {
                let target = nums[i] + nums[l] + nums[r]
                if(target === 0) {
                    if (!obj[[nums[i], nums[l], nums[r]]]){
                        res.push([nums[i], nums[l], nums[r]])
                        obj[[nums[i], nums[l], nums[r]]] = true
                    }
                    l ++

                }else if(target<0 ) {
                    l ++
                }else {
                    r --
                }
            }
        }
    }
    return res
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]))
