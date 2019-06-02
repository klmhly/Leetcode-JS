//遍历这棵树，如果某个节点值与子结构的根相同，
//则执行判断函数
function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

function hasNode(T1,T2) {
    var res = false
    if(!T1 || !T2){
        res = false
        return res
    }
    if(T1.val == T2.val){
        res = isContains(T1,T2)
    }
    if(!res){
        res =hasNode(T1.left,T2)
    }

    if(!res){
        res = hasNode(T1.right,T2)
    }
    return res
}

function isContains(T1,T2) {

    if(!T2){
        return true
    }
    if(!T1){
        return false
    }
    if(T1.val!=T2.val){
        return false
    }
    return isContains(T1.left,T2.left) && isContains(T1.right,T2.right)
}


var n1 = new TreeNode(1)
n1.left = n2 = new TreeNode(2)
n1.right = n3 = new TreeNode(3)
n2.left = n4 = new TreeNode(4)
n2.right = n5 = new TreeNode(5)
n3.left = n6 = new TreeNode(6)

var h1 = new TreeNode(2)
h1.left = h2 = new TreeNode(4)
h1.right = h3 = new TreeNode(5)

console.log(hasNode(n1,h1))
