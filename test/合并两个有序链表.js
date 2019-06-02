function LinkList(val) {
    this.val = val
    this.next = null
}


function merge(p,q) {
    var h = new LinkList(0)
    var temp = h
    while (p&q){
        if(p.val<q.val){
            temp.next = p
            temp = temp.next
            p = p.next
        }
        else{
            temp.next = q
            temp = temp.next
            q = q.next
        }
    }
    if(p){
        temp.next = p
    }
    else{
        temp.next = q
    }

    return h.next
}
