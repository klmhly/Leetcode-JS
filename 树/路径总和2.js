//从根节点到叶子节点的是否满足
/*
* 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]*/
var pathSum = function(root, sum) {
    var res = []
    var temp = []
    treePath(root,res,temp,sum)
    return res
};

function treePath(root,res,temp,sum){
    if(!root){
        return
    }
    temp.push(root.val)
    if(!root.left && !root.right && sum-root.val==0) {
        res.push(temp.slice())   //关键语句，拷贝的是副本
        temp.pop()
        return
    }

    treePath(root.left,res,temp,sum-root.val)
    treePath(root.right,res,temp,sum-root.val)

    //左右节点都找不到，就移除
    temp.pop()

}
