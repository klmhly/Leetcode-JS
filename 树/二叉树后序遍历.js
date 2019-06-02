var postorderTraversal = function(root) {
    var res = []
    var node = null
    var stack = []
    if(!root) return res
    var pre = root
    stack.push(root)
    while(stack.length){
        var cur = stack[stack.length-1]
        if(cur.left && cur.left!=pre &&cur.right!=pre){
            stack.push(cur.left)
        }else if(cur.right && cur.right!=pre){
            stack.push(cur.right)
        }else{
            res.push(cur.val)
            pre = stack.pop()
        }
    }
    return res
};

