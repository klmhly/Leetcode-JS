//遇到数字就进栈，直到符号就出两个进行运算

var evalRPN = function(tokens) {
    if(tokens.length==0) return
    var res = []
    var stack = []
    for(var i=0; i<tokens.length;i++){
        if(tokens[i]!='+'&&tokens[i]!='-'&&tokens[i]!='*'&&tokens[i]!='/'){
            stack.push(tokens[i])
        }else{
            var a = parseInt(stack.pop())
            var b = parseInt(stack.pop())
            stack.push(opt[tokens[i]](a,b))
        }
    }
    return stack.pop()
};

opt={
    '+': function(a,b){return b+a},
    '-': function(a,b){return b-a},
    '*': function(a,b){return b*a},
    '/': function(a,b){return parseInt(b/a)}
}
