function bigAdd(a,b) {
    a = '0'+ a
    b = '0'+ b
    var arrA = a.split('')
    var arrB = b.split('')
    var res = []
    var distance = arrA.length - arrB.length
    var len = distance>0? arrA.length :arrB.length
    if(distance>0){
        for(var i=0 ;i<distance; i++){
            arrB.unshift('0')
        }
    }
    else{
        for(var i=0 ;i<Math.abs(distance); i++){
            arrA.unshift('0')
        }
    }
    var carry=0
    for(var i=len-1; i>0; i--){
        var x = parseInt(arrA[i])
        var y = parseInt(arrB[i])
        var z= (x+y+carry)%10
        carry = parseInt((x+y+carry)/10)
        res.unshift(z)
    }
    if(carry!=0){
        res.unshift(carry)
    }

    res = res.join('')
    return res
}

console.log(bigAdd('32','7800'))
