/**
 * @param {number[]} height
 * @return {number}
 */
// 移动契机：将指向较短的指针向前移动一步
var maxArea = function(height) {
    let l = 0
    let r = height.length -1
    let area = (r-l) * Math.min(height[l], height[r])
    while(l<r) {
        height[l]<height[r] ? l++ : r--
        area = Math.max(area, (r-l) * Math.min(height[l], height[r]))
    }
    return area
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
