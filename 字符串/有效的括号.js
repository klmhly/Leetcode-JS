function isValid(s) {
    var obj = {
        '(':')',
        '[':']',
        '{':'}'
    }

    // 栈
    var stack = []
    for(let item of s){
        if(item=='(' || item=='[' || item=='{'){
            stack.push(item)
        }
        else {
            if(stack.length<0){
                return false
            }
            var temp = stack.pop()
            if(obj[temp] != item){
                return false
            }
        }
    }
    if(stack.length>0){
        return false
    }
    else{
        return true
    }
}

var s = '()[]{'
console.log(isValid(s))

// s = '[]'
// for(var item of s){
//     console.log(item)
// }