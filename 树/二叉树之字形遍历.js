var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let leftToRight = true;
    let stack = [];
    let result = [];
    let p = root;
    stack.push(p)
    while (stack.length) {
        let len = stack.length;
        //临时这一层
        let temp = [];
        let result_temp = [];
        while(len) {
            p = stack.pop();
            result_temp.push(p.val);
            if (leftToRight) {
                if (p.left) temp.push(p.left)
                if (p.right) temp.push(p.right)
            } else {
                if (p.right) temp.push(p.right)
                if (p.left) temp.push(p.left)
            }
            len--;
        }
        stack = temp;
        leftToRight = !leftToRight;
        result.push(result_temp)
    }
    return result;
};
