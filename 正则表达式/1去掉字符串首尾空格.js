function trimStr (str){
    return str.replace(/(^\s+)|(\s+$)/g, '')
}

let str = '  acx de '
console.log((trimStr(str)))