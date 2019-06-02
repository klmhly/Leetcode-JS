function mergeKList(lists) {
    var nodes = []
    for (var i=0; i<lists.length; i++) {
        var head = lists[i]
        while (head) {
            nodes.push(head.val)
            head = head.next()
        }
    }
    if(nodes.length<1){
        return
    }
    nodes.sort(compare)
    var h = ListNode(0)
    var tail = h
    for (item of nodes) {
        tail.next = new ListNode(item)
        tail = tail.next
    }
    return h.next
}

function compare(val1,val2) {
    if(val1<val2){
        return -1
    }
    else if(val1>val2){
        return 1
    }
    else {
        return 0
    }
}