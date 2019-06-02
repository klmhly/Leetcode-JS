function maxProduct(n) {
    if(n<2){
        return 0
    }
    if (n==3){
        return 2
    }

    // 保存子段的状态9
    var products = [0,1,2,3]
    for(var i=4; i<=n; i++){
        var max = 0
        for(var j=1;j<=i/2;j++){
            var product = products[j]*products[i-j]
            if (max <product){
                max = product
            }
            products[i] = max
        }
    }
    max = products[n]
    // products = null
    return max
}
console.log(maxProduct(4))
