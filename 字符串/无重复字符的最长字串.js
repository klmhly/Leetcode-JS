// 思想：用一个set保存每次的无重复字串，
// res记录当前的最大长度，边遍历边更新这两个值

/**
 * @param {string} s
 * @return {number}
 */
//尺举法1
var lengthOfLongestSubstring = function(s) {
    var strSet = ''
    var res = 0
    for(var i=0; i<s.length;i++){
        var m = strSet.indexOf(s[i])
        if(m ==-1){
            strSet += s[i]
            res = res>strSet.length?res :strSet.length
        }
        else{
            strSet = strSet.substr(m+1)+s[i]
        }
    }
    return res
};

//尺举法2
var lengthOfLongestSubstring = function(s) {
    var res = 0
    var left = 0
    var map = new Map()
    for(let i=0; i<s.length; i++){
        var v = s[i]
        //一开始map[v]不存在（undefined），返回false；执行这个代表遇到重复元素了，更新窗口左指针
        if(map[v]>=left){
            left = map[v]+1
        }
        //无论是不是重复，都把当前元素放进map
        map[v] = i
        res = Math.max(res,i-left+1)    //在前一段和相邻段取最大值
    }
    return res
};

