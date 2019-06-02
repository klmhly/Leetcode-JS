var connect = function(root) {
    if(!root) return root
    var quene = []
    quene.push(root)
    while(quene.length){
        var temp_quene = []
        var len = quene.length
        for(var i=0;i<len; i++){
            var node = quene[i]
            if(node.left) {temp_quene.push(node.left)}
            if(node.right) {temp_quene.push(node.right)}
            if(i<len-1){
                node.next = quene[i+1]
            }
        }
        quene  = temp_quene
    }
    return root
};
