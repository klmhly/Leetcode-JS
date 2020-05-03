/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let ans = ''
    let carry = 0

    for(let i=num1.legth-1, j= num2.length-1; i>=0 || j>=0; i--,j--){
        let sum = 0
        sum += i>=0 ? num1[i] - '0' : 0
        sum += j>=0 ? num2[j] - '0' : 0
        sum += carry
        console.log(num1[i] - '0')
        ans = ans + parseInt(sum%10)
        carry = parseInt(sum/10)
    }

    ans += carry >0 ? '1' : ''

    return ans.split('').reverse().join('')
};

console.log(addStrings('1', '1'))