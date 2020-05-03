function outerFn(){
    var i = 0;
    function innerFn(){
        i++;
        console.log(i);
    }
    innerFn()
}
// var inner = outerFn();  //每次外部函数执行的时候，外部函数的地址不同，都会重新创建一个新的地址
inner();
inner();
inner();
