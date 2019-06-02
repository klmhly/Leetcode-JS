function ListNode(val) {
    this.val = val
    this.next = null
}

function combinedList(L1,L2) {
    if(!L1){
        return L2
    }
    if(!L2){
        return L1
    }
    var p = L1
    var q = L2
    var temp = new ListNode(-1)
    var L3 = temp
    while (p && q){
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
    if(q){
        temp.next = q
    }
    return L3.next
}


var n1 = new ListNode(1)
n1.next = n2 =  new ListNode(2)


var  n4 =  new ListNode(4)
n4.next = n5 =  new ListNode(5)
n5.next = n6 =  new ListNode(6)


console.log(combinedList(n1,n4))
