var isSymmetric = function(root) {
    if(!root) return true
    return Same(root.left,root.right)
};

function Same(p,q){
    if(!p & !q){
        return true
    }
    if(!p || !q){
        return false
    }
    if(p.val!=q.val){
        return false
    }
    return Same(p.left,q.right) && Same(p.right,q.left)
}
