//它的基本思想是：主要是根据CPU的调度算法实现的，
// 对一组数据进行排序，不能存在负数值；
// 这个数是多大，那么就在线程里睡眠它的10倍再加10；
// 不是睡眠和它的数值一样大的原因是，当数值太小时，误差太大，睡眠的时间不比输出的时间少，那么就会存在不正确的输出结果。
var arr=[4,2,7,5,6,0,8];
var sleepSort=function(arr,callback){
    let res=[];
    arr.forEach(item=>{
        setTimeout(()=>{
            res.push(item)
            // 如果执行完毕，回调
            if(res.length===arr.length) callback(res);
        },item)
    });
}
sleepSort(arr,res=>{console.log(res)})



