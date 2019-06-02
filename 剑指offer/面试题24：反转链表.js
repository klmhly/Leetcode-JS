function ListNode(val){
    this.val = val
    this.next = null
}


function reverseList(L) {
    if(!L){
        return
    }
    var head = new ListNode(-1)
    var cur = L
    var pre = null
    var pnext = null

    while(cur){
        pnext = cur.next
        if(pnext==null){
            head = cur
        }
        cur.next = pre
        pre = cur
        cur = pnext
    }

    return head
}


var n1 = new ListNode(1)
n1.next = n2 =  new ListNode(2)
n2.next = n3 =  new ListNode(3)
n3.next = n4 =  new ListNode(4)
n4.next = n5 =  new ListNode(5)
n5.next = n6 =  new ListNode(6)

console.log(reverseList(n1))
