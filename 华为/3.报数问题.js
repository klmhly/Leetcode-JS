var lastRemaining = function(n, m) {
    let arr = []
    for(let i=0; i<n; i++){
        arr[i] = i
    }
    let index = 0
    while(arr.length>1){
        index = (index+m-1) % arr.length
        arr.splice(index, 1)
    }
    return arr[0]

};