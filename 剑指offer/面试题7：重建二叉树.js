/*
* 找到根节点，对左右子树递归调用
* */
//找到根节点
function buildBinaryTree(arr1,arr2) {
    if(arr1.length==0){
        return
    }

    var treeNode = {
        val:arr1[0]
    }
    for (var i=0; i<arr1.length; i++) {
        if(arr2[i]===arr1[0]){
            treeNode.left = buildBinaryTree(arr1.slice(1,i+1),arr2.slice(0,i))
            treeNode.right = buildBinaryTree(arr1.slice(i+1),arr2.slice(i+1))
        }
    }
    return treeNode

}

var arr1 = [1,2,4,7,3,5,6,8]
var arr2 = [4,7,2,1,5,3,8,6]
var s = buildBinaryTree(arr1,arr2)
console.log(s)



function print(s) {
    if(s){
        console.log(s.val)
        print(s.left)
        print(s.right)
    }
}
print(s)
