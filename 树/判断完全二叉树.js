//如果，左右孩子都存在进栈；
//如果，只有右孩子，没有左；false
//如果，只有左孩子或者左右孩子都空，接下来的所有节点只能是叶子节点
var isCompleteTree = function(root) {
    if(!root) return false
    var quene = []
    quene.push(root)
    var noChild = false
    while(quene.length){
        var node = quene.shift()
        if(node.left){
            if(noChild){
                return false
            }else{
                quene.push(node.left)
            }
        }
        else{
            noChild = true
        }
        if(node.right){
            if(noChild){
                return false
            }else{
                quene.push(node.right)
            }
        }else{
            noChild = true
        }
    }
    return true
};
