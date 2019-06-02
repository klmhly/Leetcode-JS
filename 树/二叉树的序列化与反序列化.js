//按照先序遍历进行序列化
var serialize = function(root) {
    if(!root) return '#'
    return root.val+','+serialize(root.left)+','+serialize(root.right)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data){
    var list = data.split(',')
    return deserializeTree(list)
}
var deserializeTree = function(list) {
    if(list.length<1) return null
    var val = list.shift()
    var root = null
    if(val!='#'){
        root = new TreeNode(val)
        root.left = deserializeTree(list)
        root.right = deserializeTree(list)
    }
    return root
};


//测试
function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

var a1 = new TreeNode(1)
a1.left = a2 =new TreeNode(2)
a1.right = a3 = new TreeNode(3)
a2.left = a4 =new TreeNode(4)

var b = serialize(a1)
var b1 = b.split(',')
console.log(typeof b)
console.log(b1)
deserialize(b)


