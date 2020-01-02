/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var res = []
    str = str.replace(/^\s+/g,'')

    if(str[0]=='+'||str[0]=='-'||(str[0]>='0'&&str[0]<='9')){
        for(var i=1; i<str.length; i++){
            if(str[i]>='0'&&str[i]<='9'){
                res.push(str[i])
            }else{
                break
            }
        }
    }else{
        return 0
    }
    if(str[0]=='-'){
        if(res.length>0){
            res.unshift('-')
        }else{
            return 0
        }
    }else if(str[0]>='0' && str[0]<='9'){
        res.unshift(str[0])
    }else{
        if(res.length<=0 ){
            return 0
        }
    }
    res = parseInt(res.join(''))

    if(res<=Math.pow(-2,31)){
        return Math.pow(-2,31)
    }else if(res>=Math.pow(2,31)-1){
        return Math.pow(2,31)-1
    }else{
        return res
    }

};
console.log(myAtoi('2147483647'))
