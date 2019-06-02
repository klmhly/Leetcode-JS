// 众数：在数组中出现次数大于（n/2）
//  此类，用一个哈希字典来存储统计 数组中每个元素的次数，并且在统计过程中进行着条件筛选


function majorNum(nums) {
    var resObj = {}
    var res
    nums.forEach(num=>{
        if(!resObj[num]){
            resObj[num] = 1
        }else{
            resObj[num]++
        }
        if(resObj[num]>(nums.length/2)){
            res = num
        }
    })
    return res
}

console.log(majorNum([3,2,3]))