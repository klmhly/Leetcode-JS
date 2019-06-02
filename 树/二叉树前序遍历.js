var preorderTraversal = function(root) {
    var res = []
    var stack = []
    if(!root) return []
    stack.push(root)
    while(stack.length){
        var node = stack.pop()
        res.push(node.val)
        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }
    }
    return res
};
