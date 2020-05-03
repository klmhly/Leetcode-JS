function isValid(str) {
    let map = {
        ')' : '(',
        '}': '{',
        ']' : '['
    }
    let stack = []
    for(let i=0; i<str.length; i++){
        if(str[i]==='(' || str[i]==='[' || str[i]==='{') {
            stack.push(str[i])
        } else {
            if(stack.length === 0) {
                return false
            }
            let top = stack.pop()
            if(map[str[i]] !== top){
                return false
            }
        }
    }
    if(stack.length === 0){
        return true
    } else {
        return false
    }
}

let str = '(['
console.log(isValid(str))