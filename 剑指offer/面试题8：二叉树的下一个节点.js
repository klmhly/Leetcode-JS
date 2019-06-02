function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
    this.parent = null
}

var h1 = new TreeNode(1)
h1.left = h2 = new TreeNode(2)
h2.parent = h1
h1.right = h3 = new TreeNode(3)
h3.parent = h1


function nextNode(L,node) {
    if(!L){
        return
    }

    //如果当前节点有右子树节点
    if(node.right!=null){
        var rNode = node.right
        while(rNode.left){
            rNode = rNode.left
        }
        return rNode
    }
    //如果当前节点无右子树节点，且自己是左孩子
    else if(node.parent && node.parent.left == node) {
        // 如果自己是左孩子
        return node.parent
    }
    //如果当前节点无右子树节点，且自己不是左孩子（找到第一个是其父亲左孩子的节点）
    else if(node.parent && node.parent.left !=  node){
        var pNode = node.parent
        var gNode = pNode.parent
        while(gNode) {
            if (gNode.left == pNode) {
                return pNode
            } else {
                pNode = pNode.parent
                gNode = pNode.parent
            }
        }

    }
}

console.log(nextNode(h1,h2))
