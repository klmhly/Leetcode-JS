// 快慢指针
/*
* slow的路径：x
* fast的路径：2x=x+n   （n = x）
* */
function ListNode(val) {
    this.val = val
    this.next = null
}


function entryLoopNode(L) {
    if(!L||!L.next){
        return
    }
    var slow = L
    var fast = L.next
    var flag = true  //如果有环，指针永远不会空，所以需要标识位判断循环的终止
    while(flag && fast){
        if(slow == fast){
            flag = false
        }
        //如果不是环
        if(fast.next==null){
            return -1
        }
        else {
            slow = slow.next
            fast = fast.next.next
        }
    }

    fast =  L
    while (fast!=slow){
        fast = fast.next
        slow = slow.next
    }
    return fast
}

var p1 = new ListNode(2)
p1.next = p2 = new ListNode(4)
p2.next = p3 = new ListNode(6)
p3.next = p4 = new ListNode(8)
p4.next = p2

console.log(entryLoopNode(p1))
