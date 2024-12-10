let n = 6;
let arr = [5,8,8,6,8,7];

let maxNum = arr[0]
let frequency = 1

for (let i = 1;i<n;i++){
    if(arr[i]>maxNum){
        maxNum = arr[i];
        frequency = 1;
    }else if (arr[i] === maxNum){
        frequency ++;
    }
}


console.log(maxNum+""+frequency)
