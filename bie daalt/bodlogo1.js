let n = 5;

let arr = [1,2,3,4,5];
let a = 2;

let result =0;

for(let i = 0; i < n; i++) {
    if(arr[i] == a) {
        result++;
    }
}
if(result == 1) {
    console.log('YES')
} else {
    console.log("NO")
}