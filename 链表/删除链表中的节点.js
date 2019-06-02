function ListNode(val) {
    this.val = val
    this.next = null
}

// 删除的
// 先加一个头节点，指向链表，保证链首和中间的删除是一样的处理
function removeList(head,node) {
    if(!node){
        return head
    }
    var p = new ListNode(0)
    p.next = head
    var h = p
    while (p.next){
        if(p.next.val==node){
            p.next = p.next.next
        }
        else{
            p = p.next
        }
    }
    return h.next
}

var p1 = new ListNode(1)
p1.next = p2 = new ListNode(2)
p2.next = p3 = new ListNode(3)

console.log(removeList(p1,2))