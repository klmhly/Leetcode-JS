/*给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

    输入:

        1
        /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
*/

var binaryTreePaths = function(root) {
    if(!root) return []
    var res = []
    var str=''
    treePath(root,res,str)
    return res
};

function treePath(root,res,str){
    str += root.val+' '
    if(!root.left && !root.right){
        res.push(str.trim().replace(/\s/g,'->'))
    }
    if(root.left){
        treePath(root.left,res,str)
    }
    if(root.right){
        treePath(root.right,res,str)
    }
}
