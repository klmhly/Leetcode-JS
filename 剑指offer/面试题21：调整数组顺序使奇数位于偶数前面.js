function reOrder(arr) {
    var i = 0
    var j = arr.length-1
    while (i<j){
        while (i<j && arr[j]%2==0) {
            j --
        }
        while (i<j && arr[i]%2==1) {
            i ++
        }
        if(i<j){
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            j--
            i++
        }
    }
}

var arr = [2,4,8,1]
reOrder(arr)
console.log(arr)
