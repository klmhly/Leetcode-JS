function longestPalind(s) {
    var str = s
    var l = str.length
    var res
    var start=0,end=0,long=0
    var arr = new Array(l)
    //初始化二维数组
    for(var i=0; i<l; i++ ){
        arr[i] = new Array(l)
        for(var j=0; j<l; j++){
            if(i == j){
                arr[i][j] = 1
            }
            else{
                arr[i][j] = 0
            }

        }
    }
    //L是字串长度，i是字串起点
    for(var gap=2;gap<l;gap++){
        for(var i=0;i<l-gap;i++){
            j = i+gap-1
            if (gap==2){
                if(str[i]==str[j]){
                    arr[i][j] = 1
                }
                else{
                    arr[i][j] = 0
                }
            }
            else{
                if(str[i]==str[j]){
                    arr[i][j] = arr[i+1][j-1]
                }
                else{
                    arr[i][j] = 0
                }
            }
            if(arr[i][j] == 1 && j-i>long){
                start = i
                end = j
            }
        }
    }
    console.log(arr)
    res = s.slice(start,end+1)
    return res
}

s = 'babad'
console.log(longestPalind(s))