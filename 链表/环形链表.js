//设置两个指针，fast和slow，fast每次走两步，slow每次走一步，
// 如果链表有环是封闭的话，两个指针在里面就形成了一个追击问题，是早晚会相遇的

function ListNode(val) {
    this.val = val
    this.next = null
}

function cycleList(head) {
    if(!head || !head.next){
        return false
    }
    var slow = head
    var fast = head.next
    while(fast){
        if(slow==fast){
            return true
        }
        else{
            fast = fast.next.next
            slow = slow.next
        }
    }
    return false
}


var p1 = new ListNode(2)
p1.next = p2 = new ListNode(4)
p2.next = p3 = new ListNode(3)
p3.next = p1

console.log(cycleList(p1))