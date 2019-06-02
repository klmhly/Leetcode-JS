function ListNode(val) {
    this.val = val
    this.next = null
}

function rotateList(L,k) {
    if(!L){
        return L
    }

    var fast=L, slow = L

    // 对k处理
    var count = 0
    var p = L
    while (p) {
        count++
        p = p.next
    }
    k = k % count

    for (var i=0; i<k; i++) {
        console.log(fast.val)
        fast = fast.next

    }
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }

    fast.next = L
    fast = slow.next
    slow.next = null
    return fast
}

var p1 = new ListNode(1)
p1.next = p2 = new ListNode(2)
p2.next = p3 = new ListNode(3)
p3.next = p4 = new ListNode(4)
p4.next = p5 = new ListNode(5)
var res = rotateList(p1,2)
console.log(res)
while (res) {
    console.log(res.val)
    res = res.next
}