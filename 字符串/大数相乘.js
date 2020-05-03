function mulStr(nums1,nums2) {

    // 开辟存放结果的空间
    var l1 = nums1.length
    var l2 = nums2.length
    var res = new Array(l1+l2).fill(0)
    // for (var i=0;i<res.length;i++) {
    //     res[i] = 0
    // }

    //按人工方法相乘
    for (var i = l1-1; i>=0 ;i--) {
        for(var j= l2-1; j>=0; j--){
            var mul = (nums1[i]-'0')*(nums2[j]-'0')
            res[i+j+1] =  mul+res[i+j+1]
        }
    }

    // 计算进位后真实值
    var pos = 0
    for (var i=res.length-1; i>0; i--) {
        var bit = parseInt((res[i]+pos)%10)  //只取最后一位
        pos = parseInt((res[i]+pos)/10)  //取进位
        res[i] = bit
    }

    res[0] += pos
    // 判断首位
    if(res[0]=='0'){
        res.shift()
    }
    res = res.join('')
    console.log(res)
}

mulStr('9','9')

