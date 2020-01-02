var trap = function (height) {
    if (!height || height.length == 0) {
        return 0;
    }
    let stack = [];
    let res = 0;
    for (let index = 0; index < height.length; index++) {
        while (stack.length > 0 && height[index] > height[stack[stack.length - 1]]) {
            let current = stack.pop();
            if (stack.length === 0) {
                break;
            }
            res += (Math.min(height[index], height[stack[stack.length - 1]]) - height[current]) * (index - stack[stack.length - 1] - 1);
        }
        stack.push(index);
    }
    return res;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))