/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    //对二维数组按照index：0排序
    envelopes.sort(function(a,b){
        if(a[0]==b[0]){
            if(a[1]==b[1]){
                return 0
            }else if(a[1]>b[1]){
                return -1
            }else{
                return 1
            }

        }else if(a[0]>b[0]){
            return 1
        }else{
            return -1
        }
    })

    //以j结尾的最长子序列的长度
    var dp = []
    var l = envelopes.length
    for(var i=0; i<l; i++){
        dp[i] = 1
    }
    for(var j=1; j<envelopes.length; j++){
        for(var i=0;i<j; i++){
            if(envelopes[i][1]<envelopes[j][1] && dp[j]<dp[i]+1){
                dp[j] = dp[i]+1
            }
        }
    }

    console.log(Math.max.apply(null,dp))
};

maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])

function compare() {

}
