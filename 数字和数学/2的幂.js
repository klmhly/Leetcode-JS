// 输入一个数判断是不是2的幂次方
// 一直除以2

function  isPowerOfTwo(num) {

    if(num!=1){
        while(num!=1){
            if(num%2==0){
                num = num/2
            }
            else {
                return false
            }
        }
        return true
    }
    else{
        return true
    }

}


console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(5))
