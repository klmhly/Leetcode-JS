// 双指针法

/**
 * @param {character[]} chars
 * @return {number}
 */

// 双指针
var compress = function(chars) {
    let i=0    //跟进压缩指针
    let j=0   // 遍历真实指针
    chars = chars.split('')
    while(i<chars.length && j<chars.length){
        let temp = chars[j]
        let start = j
        while(j< chars.length && chars[j] === temp){
            j++
        }
        let dis = j-start
        if(dis >1){
            dis = '' + dis
            for(let k=0; k<dis.length; k++){
                chars[i++] = dis.substr(k,1)
            }
        }
        chars[i++] = temp
    }
    return chars.slice(0,i).join('')
};

let chars = 'aaaassc'

console.log(compress(chars))