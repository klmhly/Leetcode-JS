function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

// 左子树最大深度+右子树最大深度+1
function depthMax(root) {
    var depth = 0
    if(!root){
        return depth
    }
    var l = depthMax(root.left)
    var r = depthMax(root.right)
    depth = Math.max(l,r)+1
    return depth
}

//测试
var t1 = new TreeNode(7)
t1.left = t11 = new TreeNode(3)
t1.right = t12 = new TreeNode(10)
t11.left = t21 = new TreeNode(4)
console.log(depthMax(t1))