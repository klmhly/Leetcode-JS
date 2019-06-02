function ListNode(val) {
    this.val = val
    this.next = null
}

// 合并两个有序链表
function get_merge(p,q) {
    // h不动，temp移动
    var h = new ListNode(0)
    var temp = h
    while(p && q){
        console.log(p.val,q.val)
        if(p.val<q.val){
            temp.next = p
            p = p.next
        }
        else{
            temp.next = q
            q = q.next
        }
        temp = temp.next
    }
    if(p){
        temp.next = p
    }
    if(q) {
        temp.next = q
    }
    return h.next

}

var p1 = new ListNode(1)
p1.next = p2 = new ListNode(4)
p2.next = p3 = new ListNode(9)


var q1 = new ListNode(5)
q1.next = q2 = new ListNode(6)
q2.next = q3 = new ListNode(14)
var h = get_merge(p1,q1)
while(h){
    console.log(h.val)
    h = h.next
}