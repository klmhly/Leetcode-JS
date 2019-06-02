//拷贝它后面的节点，然后把后面节点删除 ：O（1）

// 删除位置的不同处理
/*
* 头部
* 中间
* 尾部（特殊处理）*/
function LinkList(val) {
    this.val = val
    this.next = null
}

function deleteNode(head,node) {
    if(!head){
        return
    }
    //加一个头节点保证删除第一个和中间的操作一样
    var H = new LinkList(0)
    if(node.next!=null){
        H.next = head
        node.val = node.next.val
        node.next = node.next.next
    }
    else{
        node = node.next
    }
    return H.next
}


var n1 = new LinkList(1)
n1.next = n2 =  new LinkList(2)
n2.next = n3 =  new LinkList(3)

console.log(deleteNode(n1,n2))
