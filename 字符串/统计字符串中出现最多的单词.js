function word(str) {
    var newArr = []
    arr = str.split(' ')
    arr.forEach(item=>{
        item.toLowerCase()
    })
    console.log(arr)
    for (var i = 0; i<arr.length;i++) {
        if(!newArr[arr[i]]){
            newArr[arr[i]] = 1
        }
        else{
            newArr[arr[i]] +=1
        }
    }
    console.log(newArr)
    maxkey = 1
    maxValue = ''
    for(var key in newArr){
        if (newArr[key]>1){
            maxkey = key;
            maxValue = newArr[key]
        }
    }
    console.log(maxkey,maxValue)

}

str = 'ab c ab d ee ee ee f'
word(str)