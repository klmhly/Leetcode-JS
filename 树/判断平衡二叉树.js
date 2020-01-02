var maxDepth = function(root) {
    if(!root) return true
    var l1=maxDepth(root.left);
    var l2=maxDepth(root.right);
    var heightDiff = Math.abs(l1-l2)
    if(heightDiff >1) {
        return false
    }
    return maxDepth

};


function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

var a1 = new TreeNode(1)
a1.left = a2 =new TreeNode(2)
a1.right = a3 = new TreeNode(3)
a2.left = a4 =new TreeNode(4)
a4.left = a5 =new TreeNode(5)


console.log(maxDepth(a1))

