function ListNode(val) {
    this.val = val;
    this.next = null;
}



//pre,node1,node2,rail
function swapNodes(head) {
    if(!head){
        return head
    }
    var node1,node2,lat
    var h = new ListNode(0)
    h.next = head
    var pre = h
    while (pre.next && pre.next.next) {
        node1 = pre.next
        node2 = node1.next
        lat = node2.next

        pre.next = node2
        node2.next=node1
        node1.next = lat
        pre = node1
    }
    return h.next
}




var p1 = new ListNode(1)
p1.next = p2 = new ListNode(2)
p2.next = p3 = new ListNode(3)
p3.next = p4 = new ListNode(4)

var res = swapNodes(p1)

console.log(res)