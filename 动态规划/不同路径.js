function pathCount(m,n){
    var arr = new Array(m)
    for(let i=0; i<arr.length; i++){
        arr[i] = new Array(n)
    }

    for(let i=0; i<m ;i++){
        for(let j=0; j<n; j++){
            if(i==0||j==0){
                arr[i][j] = 1
            }
            else{
                arr[i][j] = arr[i-1][j]+arr[i][j-1]
            }

        }
    }
    return arr[m-1][n-1]
}
console.log(pathCount(7,3))