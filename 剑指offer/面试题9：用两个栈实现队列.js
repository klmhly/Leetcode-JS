var stack1 = []
var stack2 = []


function push(val) {
    return stack1.push(val)
    console.log(stack1.length)
}


function pop() {
    if(stack2.length!=0){
        stack2.pop()
    }
    else{
        if(stack1.length!=0){
            // 因为栈的长度是动态变化的过程，所以先把长度存起来
            var len = stack1.length
            for(var i=0; i<len; i++){
                var x = stack1.pop()
                // console.log(i,x)
                stack2.push(x)
            }
            return stack2.pop()
        }
        else{
            return null
        }

    }
}

push(1)
push(2)
push(3)

var b = pop()


console.log(b)
