var levelOrder = function(root) {
    if(!root) {
        return []
    }
    let quene = []
    let res = []
    quene.push(root)
    while(quene.length>0){
        let temp_res = []
        let temp_quene = []
        let len = quene.length
        for(let i=0; i<len; i++){
            let top = quene[i]
            temp_res.push(top.val)
            if(top.left){
                temp_quene.push(top.left)
            }
            if(top.right){
                temp_quene.push(top.right)
            }
        }
        quene = temp_quene
        res.push(temp_quene)
    }
    return res
}

let root = {
    val: 3,
    left: {
       val: 1
    },
    right:{
        val:2
    }
}

levelOrder(root)