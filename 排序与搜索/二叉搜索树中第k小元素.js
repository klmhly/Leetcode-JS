//二叉搜索树，左边的值都小于根，右边的值都大于根
// 用中序遍历二叉树，就会给二叉树的有序存储起来了
function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

// 中序遍历
function dfs(root,res) {
    if(!root){
        return
    }
    dfs(root.left,res)
    res.push(root.val)
    dfs(root.right,res)
    return res
}

function findK(root,k) {
    var ans = dfs(root,[])
    return ans[k-1]
}




//测试
var t1 = new TreeNode(7)
t1.left = new TreeNode(3)
t1.right = new TreeNode(10)

console.log(dfs(t1,[]))
console.log(findK(t1,2))