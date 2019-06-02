function LinkList(val){
    this.val = val
    this.next = null
}

function reciprpcalK(L,k) {
    if(!L){
        return L
    }
    var slow = L
    var fast = L
    for (var i=0; i<k;i++) {
        fast = fast.next
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    return slow.next
}

var n1 = new LinkList(1)
n1.next = n2 =  new LinkList(2)
n2.next = n3 =  new LinkList(3)
n3.next = n4 =  new LinkList(4)
n4.next = n5 =  new LinkList(5)
n5.next = n6 =  new LinkList(6)

console.log(reciprpcalK(n1,2))

