//有序数组中有一半的元素小于等于数组的中位数，有一半的元素大于等于中位数
//2.(等长)如果我们去掉其中一个数组比中位数小的k个数，再去掉另一个数组中比中位数大的k个数，得到的合并子数组的中位数和原来的中位数相同。
//（不等长，去掉相等长度）删除  n/2

function findMedian(nums1,nums2) {
    let m = nums1.length
    let n = nums2.length
    if (m>n) {
        temp = nums1
        nums1 = nums2
        nums2 = temp
        [m,n] = [n,m]
    }
    let [imin,imax,half] = [0,m,parseInt((m+n)/2)]
    while (imin<imax) {
        i = parseInt((imin+imax)/2)
        j = half-i

    }
}

