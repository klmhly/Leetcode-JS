// （1）** 如果遇到的是数字，我们直接加入到栈S1中；**
// （2）** 如果遇到的是左括号，则直接将该左括号加入到栈S2中；**
// （3）** 如果遇到的是右括号，那么将栈S2中的运算符一次出栈加入到栈S1中，直到遇到左括号，但是该左括号出栈S2并不加入到栈S1中；**
// （4）** 如果遇到的是运算符，包括单目运算符和双目运算符，我们按照下面的规则进行操作：**
//
// 如果此时栈S2为空，则直接将运算符加入到栈S2中；
// 如果此时栈S2不为空，当前遍历的运算符的优先级大于等于栈顶运算符的优先级，那么直接入栈S2；
// 如果此时栈S2不为空，当前遍历的运算符的优先级小于栈顶运算符的优先级，则将栈顶运算符一直出栈加入到栈S1中，直到栈为空或者遇到一个运算符的优先级小于等于当前遍历的运算符的优先级，此时将该运算符加入到栈S2中；
//
// （5）** 直到遍历完整个中序表达式之后，栈S2中仍然存在运算符，那么将这些运算符依次出栈加入到栈S1中，直到栈为空。**
// 按照上面的五条操作反复进行完成，那么栈S1中存放的就是逆波兰表达式。

function toPPN(origin) {

    let num = [], operator = [];

    // 遍历中缀表达式转换成的数组
    for (let i = 0; i < origin.length; i++) {
        const item = origin[i]

        // 判断该位置上的元素是否为数字,// 如果是数字， item推入ppn
        if (!isNaN(item)) {
            num.push(item)
        } else if (item === '(' || operator.length === 0) {// 如果是'('或者operator为空数组, item推入operator
            operator.push(item)
        } else if (item === ')') {// 如果是')', operator从末尾弹出运算符并推入num直到'('
            do {
                num.push(operator.pop())
            } while (operator[operator.length - 1] !== '(')
            operator.pop()   // operator弹出'('
        } else if (!needNum(item, operator[operator.length - 1])) {
            operator.push(item)
        } else {
            // 比较运算符的优先级, 如果item低于operator栈顶符号优先级, operator弹出尾元素并推入到num
            while (operator.length && needNum(item, operator[operator.length - 1])) {
                num.push(operator.pop())
            }

            operator.push(item)
        }
    }

    // 最后, 逐次弹出operator尾元素入栈到ppn
    while (operator.length) {
        num.push(operator.pop())
    }

    return num
}


function needNum(a, b) {
    // b: operator的尾元素
    if (b === '(') return false
    if ((a === '*' || a === '/') && (b === '+' || b === '-')) return false
    return true
}

console.log(toPPN(['1', '+', '5', '', '3', '+', '(', '6', '-', '2', ')', '/', '2', '-', '4']))

