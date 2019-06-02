var inorderTraversal = function(root) {
    var res = []
    var stack = []
    if(!root) return []
    while(1){
        //每次都把最左边的节点先全部进栈
        while(root){
            stack.push(root)
            root = root.left
        }
        if(stack.length==0){
            return res
        }
        var node = stack.pop()
        res.push(node.val)
        root = node.right
    }
    return res
};
