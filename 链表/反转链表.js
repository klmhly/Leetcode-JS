function ListNode(val) {
    this.val = val
    this.next = null
}

// 定义三个节点分别指向  当前节点，前一个节点，后一个节点
// 直接修改链的指向

function reverseList(head) {
    // 定义三个指针保存原来链接状态
    var cur = head
    var pre = null
    var pnext = null

    // 尾节点
    var tail = new ListNode(0)

    while (cur!=null) {
        console.log(cur.val)
        pnext = cur.next
        if (pnext == null) {
            tail = cur
        }
        cur.next = pre
        pre = cur
        cur = pnext
    }
    return tail
}

var p1 = new ListNode(1)
p1.next = p2 = new ListNode(2)
p2.next = p3 = new ListNode(3)
console.log(reverseList(p1))