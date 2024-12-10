const prompt = requirel("prompt-sync")();

let arrLen = parseInt(prompt("arrayiin urt: "));
let arr = prompt("array data: ").split(" ");
let max = 0;
let maxCount = 0;

for (let i = 0; i < arrlen; i++) {

    if (arr[i] > max){
        max = arr[i]
    }
    else if (arr[i] === max) {
            maxCount++;
    }
    
}
console.log (max,maxCount)






for (let i = 0; 1 < n; 1+ ) {
    let arr2 = prompt("array Data; ").split(" "); // "3 4 2 6"

    if (arr2.length === n) {
        arr.push(arr2);
    }

    for (let i = 0; j < max; j++) {
        if (arr2[j] > max) {
            max = arr2[j];
            maxLoc = [i,j];
        }
    }
}
