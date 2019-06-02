//n和1进行与运算；每次把1左移，继续与运算444447                               
function isNumCount(n){
    var count = 0
    var flag = 1
    while(flag){
        // 与运算
        if(n & flag){
            count++
        }

        //循环要进行32次/64次（是32为整数还是64位整数）
        flag = flag<<1
    }
    return count
}


console.log(isNumCount(9))
