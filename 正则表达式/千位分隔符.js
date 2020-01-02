function format(str) {
    let reg = /(?=(\B\d{3})+$)/g
    return str.replace(reg, '$&,')
}
let str = '120000'
console.log(format(str))