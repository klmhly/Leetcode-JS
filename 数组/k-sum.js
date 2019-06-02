public class Solution {
    private int res = 0;

    /**
     * @param A:      an integer array.
     * @param k:      a positive integer (k <= length(A))
     * @param target: a integer
     * @return an integer
     */
    public int kSum(int A[], int k, int target) {
    // write your code here
    int n = A.length;
    int[][][] dp = new int[n + 1][k + 1][target + 1];
//        表示i个数时，j个数的和为k的数目
    for (int i = 0; i < n + 1; i++) {
    dp[i][0][0] = 1;
}
for (int i = 1; i < n + 1; i++) {
    for (int j = 1; j < k + 1 && j <= i; j++) {
        for (int l = 1; l < target + 1; l++) {
//                    i个数符合条件的数首先等于i-1个数符合条件的数
            dp[i][j][l] = dp[i - 1][j][l];

//                    如果target大于等于当前第i个数，可以让它加进去，
//                    初始化为1的原因就是等于的时候恰好是一种方法。
//                    那么个数应该是i-1个数，符合k-1然后值是target-A[i-1]的个数
            if (l >= A[i - 1]) {
                dp[i][j][l] += dp[i - 1][j - 1][l - A[i - 1]];
            }
        }
    }
}
return dp[n][k][target];
}
}
