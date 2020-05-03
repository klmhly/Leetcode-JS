function twoList(arr1, arr2){
    if(arr1.length != arr2.length) {return}
    let arr = [...arr1, ...arr2]
    arr.sort((a,b)=>b-a)
    let a = []
    let b = []
    a[0] = arr[0]
    b[0] = arr[1]
    let sum1 = arr[0]
    let sum2 = arr[1]
    for(let i=2; i<arr.length; i++){
        if(a.length< arr1.length && sum1 < sum2){
            a.push(arr[i])
            sum1 += arr[i]
        } else if(b.length<arr2.length && sum2 <= sum1){
            b.push(arr[i])
            sum2 += arr[i]
        } else if(a.length === arr1.length){
            b.concat(arr.slice(i))
            break
        } else if(b.length === arr2.length){
            a.concat(arr.slice(i))
            break
        }
    }
    let s1 = a.reduce((x,y)=>{return x+y})
    let s2 = b.reduce((x,y)=>{return x+y})
    return Math.abs(s1 - s2)
}

let arr1 = [19, 10, 7, 12, 0]
let arr2 = [34, 10, 7, 12, 1]

console.log(twoList(arr1, arr2))