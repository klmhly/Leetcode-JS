var coinChange = function(coins, amount) {
    var res = 0
    coins.sort(compare)
    console.log(coins)
    for(var i=coins.length-1; i>=0; i--){
        if(amount>=coins[i]){
            res = res+ parseInt(amount/coins[i])
            amount = amount%coins[i]
        }
        if(amount==0){
            return res
        }
    }
    return -1
};

function compare(a,b){
    if(a<b){
        return -1
    }else if(a>b){
        return 1
    }else{
        return 0
    }
}

var coins = [186,419,83,408]
var target = 6249
coinChange(coins,target)
