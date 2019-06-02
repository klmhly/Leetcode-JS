//  在未排序的数组中找到第k个最大元素

function quickSort(L,start,end,k) {
    if(start>end){
        return
    }
    var i=start
    var j=end
    var base = L[i]
    var temp
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
    temp = i

    // 有条件的递归
    if(L.length-temp==k){
        return
    }
    if(L.length-temp>k){
        i = temp+1
        if(end-i>0){
            quickSort(L,i,end,k)
        }
        else{
            return
        }

    }
    else{
        j = temp-1
        if(j-start>0){
            quickSort(L,start,j,k)
        }else{
            return
        }

    }
}


function findK(nums,k){
    quickSort(arr,0,nums.length-1,2)
    return arr[arr.length-k]
}

arr = [3,2,14,5,8]
console.log(findK(arr,2))