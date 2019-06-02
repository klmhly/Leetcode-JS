var lowestCommonAncestor = function(root, p, q) {
    if(!root || root==p || root ==q){
        return root
    }else{
        var left = lowestCommonAncestor(root.left,p,q)
        var right = lowestCommonAncestor(root.right,p,q)
        if(left&&right){
            return root
        }
        if(!left){
            return right
        }else{
            return left
        }
    }
};
