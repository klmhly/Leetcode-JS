function stair(n) {
    if(n==1){
        return 1
    }
    if(n==2){
        return 2
    }
    if(n>2){
        return stair(n-1)+stair(n-2)
    }
}

console.log(stair(4))