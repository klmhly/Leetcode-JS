//思想：前面是已经排好序的数组，每次拿到新的一个和前面的来比较，
// 如果前面的大了，则后移以为，
//知道找到比拿个书小，就插入
//打牌过程，抽牌，整理牌的过程
function insert(arr) {
    for(var i=1;i<arr.length;i++){
        var temp = arr[i]
        var j = i-1
        while(arr[j]>temp && j>=0){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = temp
    }
    return arr
}

var arr = [9,5,2,3,1,4,7]

console.log(insert(arr))