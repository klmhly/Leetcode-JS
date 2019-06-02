var l1 = 4
var l2 = 5
dp = new Array()
for(var i=0; i<l1; i++){
    for(var j = 0; j<l2; j++){
        if(j==0 && matrix[i][0]=='1') {
            dp[i][j]=1
            console.log(i,j)

        }else if(i==0 && matrix[i][j]=='1'){
            dp[i][j]=1
            console.log('i=0:',i,j)
        }
        else{
            dp[i][j]=3
        }
    }
}
