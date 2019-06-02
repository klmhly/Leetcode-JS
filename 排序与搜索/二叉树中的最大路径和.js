/*
以当前节点为根的最大路径（4种情况）
1，左子树最大路径+当前节点
2，右子树最大路径+当前节点
3，左子树最大路径+当前节点+右子树最大路径
4，只有当前节点
 */
var total_max =-2000

function maxSum(root,) {
    if(!root){
        return
    }
    var left = maxSum(root.left)
    var right = maxSum(root.right)

    //最大路径和
    total_max = Math.max(total_max, Math.max(0,left)+Math.max(0,right)+root.val)

    //选择最大的一条侧边
    return Math.max(0,Math.max(left,right)+root.val)
}

function maxPathSum(root) {
    total_max[0] = -20000
    maxSum(root)
    return total_max
}

function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}


//测试
var t1 = new TreeNode(7)
t1.left = t11 = new TreeNode(3)
t1.right = t12 = new TreeNode(10)
t11.left = t21 = new TreeNode(4)
console.log(maxPathSum(t1))