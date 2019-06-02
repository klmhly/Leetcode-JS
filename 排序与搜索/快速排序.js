
// 快排思想
function quickSort(L,start,end) {
    if(start>end){
        return
    }
    var i=start
    var j=end
    var base = L[i]
    //一次快排
    while(i<j){
        while(i<j && base<L[j]){
            j--
        }
        if(i<j){
            L[i] = L[j]
            i = i+1
        }
        while (i<j && base>L[i]) {
            i++
        }
        if(i<j){
            L[j]=L[i]
            j = j -1
        }
    }

    L[i] = base
    // 整个快排
    quickSort(L,start,i-1)
    quickSort(L,i+1,end)

}

arr = [3,2,14,5,8]
quickSort(arr,0,4)
console.log(arr)
