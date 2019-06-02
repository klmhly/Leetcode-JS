// 先统计每个链表的长度、
// 求长度差值k
// 更长的链表先走k步，然后俩链表一起走，相遇了就停止

function xiangjiao(head1,head2) {
    if(!head || !head.next){
        return null
    }
    var p = head1
    var q = head2
    var count1=0,count2=0
    while (p || q){
        if(p){
            count1++
            p = p.next
        }
        if(q){
            count2++
            q = q.next
        }
    }
    p = head1
    q = head2
    k = count1-count2
    for (var i=0; i<Math.abs(k);i++) {
        if(k<0){
            q = q.next
        }
        else{
            p = p.next
        }
    }
    while(p){
        if(p==q){
            return
        }
    }




}