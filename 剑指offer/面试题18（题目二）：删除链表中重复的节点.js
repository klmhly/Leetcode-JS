function LinkList(val) {
    this.val = val
}


// 用一个符号位
var deleteDuplicates = function(L) {
    if(!L || !L.next){
        return L
    }
    var H = {
        val:-100,
        next:null
    }
    H.next = L
    var pre = H
    var cur = L
    var flag = false
    while (cur && cur.next) {
        while(cur.next && cur.val == cur.next.val){
            flag = true
            cur = cur.next
        }
        if(flag){
            cur = cur.next
            pre.next = cur
        }
        else{

            pre = cur
            cur = cur.next
        }
        flag = false

    }
    return H.next

};
