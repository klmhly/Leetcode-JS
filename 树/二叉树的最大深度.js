var maxDepth = function(root) {
    if(!root) return 0
    var l1=maxDepth(root.left);
    var l2=maxDepth(root.right);
    return Math.max(l1,l2)+1;
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


console.log(maxDepth(a1))

