//两种解法
/*
1，栈：鲁棒性好
2，递归：先递归输出它后面的节点，再输出自己（调用栈可能会溢出）
 */

function LinkNode(val) {
    this.val = val
    this.next = null
}
var n1 = new LinkNode(1)
n1.next = n2 = new LinkNode(2)
n2.next = n3 = new LinkNode(3)


//栈
function printNode1(L) {
    var arr = []
    while(L!= null){
        arr.push(L.val)
        L = L.next
    }
    for (var i=arr.length-1; i>=0; i--) {
        console.log(arr[i])
    }
}
printNode1(n1)
console.log('---------------------')

//递归
function printNode(L) {
    if(L == null){
        return
    }
    else{
        if(L.next != null){
            printNode(L.next)
        }
        console.log(L.val)
    }

}




printNode(n1)
