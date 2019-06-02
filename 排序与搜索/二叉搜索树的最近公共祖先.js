function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}


//因为是二叉搜索树，节点的值是有大小关系的
//要么在左子树，要么在右子树，要么在根

function lowestCommonAncestor(root,p,q) {
    if(!root){
        return
    }
    //在右子树
    while(root){
        if(p.val>root.val && q.val>root.val){
            root = root.right
        }
        //在左子树
        else if(p.val<root.val && q.val<root.val){
            root = root.left
        }
        else {
            return root
        }
    }

}

//测试
var t1 = new TreeNode(7)
t1.left = t11 = new TreeNode(3)
t1.right = t12 = new TreeNode(10)
t11.left = t21 = new TreeNode(2)
console.log(lowestCommonAncestor(t1,t12,t11))