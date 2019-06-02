function cotainDup(arr) {
    var hash = []
    for (var item of arr) {
        if(!hash[item]){
            hash[item] = 1
        }else{
            return false
        }
    }
    return true
}

arr = [1,2,2,3]
console.log(cotainDup(arr))