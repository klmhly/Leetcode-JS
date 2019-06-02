//规定: O(nlog n)
// 归并：折半拆分|排序后合并

function ListNode(val) {
    this.val = val
    this.next = null
}
ListNode.prototype.init=function(arr){
    var header=this;
    if(arr.length==1){
        header.val=arr[0];
        header.next=null;
    }
    for(var i=0;i<arr.length-1;i++){
        header.val=arr[i];
        header.next=new ListNode(arr[i+1]);
        header=header.next;
    }
}

//归并排序
function sortList(head) {
    if(!head||!head.next){
        return head
    }
    else{
        // 快慢指针找中间点
        var fast = head
        var slow = head
        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        var left = head
        var right = slow.next
        slow.next = null
        //合并有序链表
        return get_merge(sortList(left),sortList(right))
    }
}



// 合并两个有序链表
function get_merge(p,q) {
    var h = new ListNode(0)
    var temp = h
    while(p && q){
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
    if(q) {
        temp.next = q
    }
    return h.next
}

//测试
var p1 = new ListNode(0)
p1.init([4,2,3])

console.log(sortList(p1))


