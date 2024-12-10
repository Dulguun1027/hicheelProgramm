let element = 5;
let too = [2,3,4,1,7];
let sondgoi = 0;
let tegsh =0;;
for(let i=0;i<element;i++){
    if(too[i]% 2==1){
        sondgoi++;
    }else{
        tegsh++;
    }
}
if(sondgoi>tegsh){
console.log('YES')
}else{
    console.log('NO')
}   