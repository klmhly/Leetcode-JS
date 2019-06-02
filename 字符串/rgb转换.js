function rgb2hex(sRGB) {
    var rgb = sRGB.slice(4,-1)
    var arr = rgb.split(',')
    var res = '#'
    for(var i=0; i<arr.length;i++){
        var val = parseInt(arr[i].trim(),10)
        if(val>=0 && val<=255){
            res = res+val.toString(16)
        }
        else{
            return sRGB
        }
    }
    return res
}

var s = 'rgb(255, 255, 255)'
console.log(rgb2hex(s))


