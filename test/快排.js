function quikSort(arr,start,end) {
    if(start>end){
        return
    }
    var i = start
    var j = end
    var base = arr[i]
    while (i<=j){
        while(i<j && base<arr[j]){
            j--
        }
        if(i<j){
            arr[i] = arr[j]
            i++
        }

        while(i<j && base>arr[i]){
            i++
        }
        if(i<=j){
            arr[j]=arr[i]
            j--
        }
    }
    arr[i] = base
    quikSort(arr,start,i-1)
    quikSort(arr,i+1,end)
}

function Sort(arr) {
    var start = 0
    var end = arr.length-1
    quikSort(arr,start,end)
}

arr = [1,5,2,7,9,3,2]
Sort(arr)
console.log(arr)
