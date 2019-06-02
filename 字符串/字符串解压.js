function jieya(s){
    // 字符串数组str
    var str = Array.prototype.slice.call(s)

    var stack = []
    var temps = []
    var ss = []
    var initStr= []

    //遍历字符串数组
    for(var i=0;i<str.length;i++){

        // 遇到右括号
        if(str[i]===']'){
            while(stack.length!=0){
                var temp = stack.pop()
                while(temp!='['){
                    temps.unshift(temp)
                    var temp = stack.pop()
                }
                var s = temps.join('')
                temps = []
                var k = stack.pop()
                if(stack.length==0){
                    ss.push({[k]:parseInt(s)})
                    var val = k.repeat(parseInt(s))
                    initStr.push(val)

                }
                else {
                    var inter = k+s
                    stack.push(inter)
                }
            }
        }
        else{
                stack.push(str[i])
        }
    }
    if(stack.length!=0){
        var last = stack.pop()
        ss.push({[last]:1})
        initStr.push(last)
    }
    var startStr = initStr.join('')
    console.log(initStr)
    return startStr

}

var o = jieya('a[23]2[2[2]c')
console.log(o)

