function subSet(nums) {
    var res = [[]]
    for(var num of nums){
        var temp = []
        for (var before of res){
            temp.push(before.concat(num))
        }
        res = res.concat(temp)
    }
    return res
}

var nums = [1,2,3]
console.log(subSet(nums))

