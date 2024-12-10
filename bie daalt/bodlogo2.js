let arr = [9,10,8,10,6]

let max = 0;
let index

for(let i = 0; i < 5; i++) {
    if(arr[i] > max) {
        max = arr[i]
        index = i
    }
}
console.log(`${max} ${index}`);