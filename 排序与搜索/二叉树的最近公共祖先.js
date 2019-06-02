function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

//递归搜索左右子树，如果左子树和右子树都不为空，说明最近父节点一定在根节点。

//反之，如果左子树为空，说明两个节点一定在右子树；

//同理如果右子树为空，说明两个节点一定在左子树。

function lowestCommonAncestor(root,p,q) {
    if(root==null || root == p || root==q){
        return root
    }
    var left = lowestCommonAncestor(root.left,p,q)
    var right = lowestCommonAncestor(root.right,p,q)
    if(left && right){
        return root
    }
    if(!left){
        return right
    }
    else {
        return left
    }
}


//测试
var t1 = new TreeNode(7)
t1.left = t11 = new TreeNode(9)
t1.right = t12 = new TreeNode(10)
t11.left = t21 = new TreeNode(4)
console.log(lowestCommonAncestor(t1,t21,t11))