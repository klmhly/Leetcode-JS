function ListNode(val) {
    this.val = val
    this.next = null
}

function addTwo(L1,L2) {
    //res不动 ， tail移动尾插
    var res =  new ListNode(0)
    var tail = res
    var p = L1
    var q = L2
    var carry = 0,x,y
    while(p || q || carry){
        if(p){
            x = p.val
            p = p.next
        }
        else{
            x = 0
        }
        if(q){
            y = q.val
            q = q.next
        }
        else{
            y=0
        }
        var sum = x+y+carry
        tail.next = new ListNode(parseInt(sum%10))
        tail = tail.next
        carry = parseInt(sum/10)
    }
    return res.next
}

var p1 = new ListNode(2)
p1.next = p2 = new ListNode(4)
p2.next = p3 = new ListNode(3)


var q1 = new ListNode(5)
q1.next = q2 = new ListNode(6)
q2.next = q3 = new ListNode(4)
console.log(addTwo(p1,q1))