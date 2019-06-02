function ListNode(val) {
    this.val = val
    this.next = null
}

// 第一次相遇后，fast=head，
// 两个指针同步走，相遇点就是入口
// 注意，判断不是环的情况
var detectCycle = function(head) {
    if(!head){
        return null   //返回空
    }
    var fast = head
    var slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next

        if(fast == slow){
            break
        }
    }

    //判断是不是因为没有环遍历到末尾结束
    if(!fast||!fast.next){
        return null
    }
    fast = head
    while(fast!=slow){
        fast = fast.next
        slow = slow.next
    }
    return slow
};

var p1 = new ListNode(2)
p1.next = p2 = new ListNode(4)
p2.next = p3 = new ListNode(6)
p3.next = p4 = new ListNode(8)
p4.next = p4

console.log(detectCycle(p1))
