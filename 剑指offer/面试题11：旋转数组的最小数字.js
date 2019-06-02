// function rotateMinNum(arr) {
//     var index1 = 0
//     var index2 = arr.length-1
//     var indexMid = index1
//     while(arr[index1]>=arr[index2]){
//         indexMid = parseInt((index1+index2)/2)
//
//         //二分查找的停止条件
//         if(index2 - index1 == 1){
//             return arr[index2]
//         }
//         else{
//
//             //最小值在右边
//             if(arr[index1]<=arr[indexMid]){
//                 index1 = indexMid
//             }
//             //最小值在左边·
//             else if(arr[indexMid]<=arr[index2]){
//                 index2 = indexMid
//             }
//         }
//     }
//     return arr[indexMid]
// }

var findMin = function(nums) {
    var l =0
    var r = nums.length
    var mid = l
    while(l<r-1){
        mid = parseInt((l+r)/2)
        if(nums[mid-1]>nums[mid]){
            return nums[mid]
        }else if(nums[l]<=nums[mid]){
            l = mid
        }else {
            r = mid

        }
    }
    return nums[0]
};
var arr = [1,2,3,8]
console.log(findMin(arr))
