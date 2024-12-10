function linearSerch(arr, searchvalue){
    for(let i = 0; < arr.length; i++) {
        if(arr[i] === searchvalue) {
            return i;
        }
    } 

    return -1;
}
let arr = [64,25,12,22,11];
console.log(linearSerch(arr,22))