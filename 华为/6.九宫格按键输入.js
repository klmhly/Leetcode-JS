function phone(digits) {
    if(str.length === 0){return []}
    let phone = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']}

    let res = []

    function backtrack(path, digits){
        if(digits.length === 0){
            res.push(path)
            return
        }
        for(let i=0; i<phone[digits[0]].length; i++){
            backtrack(path+phone[digits[0]][i], digits.slice(1))
        }
    }

    backtrack('', digits)
    return res
}