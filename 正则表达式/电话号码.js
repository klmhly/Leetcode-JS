// 11位或8位数字
function testPhone (str){
    let reg = /d{11}/
    return reg.test(str)
}

let str = '123123456799'
console.log((testPhone(str)))