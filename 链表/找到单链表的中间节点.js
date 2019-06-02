// 找到链表的中间节点(快慢指针法）
function get_mid(node) {
    if(!node||!node.next){
        console.log(1)
        return node
    }
    else{
        var fast = node
        var slow = node
        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.val)
        return slow
    }

}

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

//测试
var p1 = new ListNode(0)
p1.init([4,2,3])
console.log(get_mid(p1))