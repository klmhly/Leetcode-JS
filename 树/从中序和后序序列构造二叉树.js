var buildTree = function(inorder, postorder) {
    if(postorder.length==0) return null
    var len = postorder.length
    var rootVal = postorder[len-1]
    var root={
        val:rootVal
    }
    for(var i=0; i<len; i++){
        if(inorder[i]==rootVal){
            root.left = buildTree(inorder.slice(0,i),postorder.slice(0,i))
            root.right = buildTree(inorder.slice(i+1),postorder.slice(i,-1))
        }
    }
    return root
};
