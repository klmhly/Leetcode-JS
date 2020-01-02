/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var inorderTraversal = function(root) {
    let res = []
    function inOrder (root) {
        if(root!=null){
            if(root.left!=null) {
                inOrder(root.left)
            }
            res.push(root.val)
            if(root.right!=null){
                inOrder(root.right)
            }
        }
    }
    inOrder(root, res)
    return res
};



let root = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val:3
    }
}

console.log(inorderTraversal(root))