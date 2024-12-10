class Student {
  constructor(id,name){
    this.id = id;
    this.name = name;
  }
}
let arr = [];
arr.push(new Student("1","bataa"));
arr.push(new Student("2","boldoo"));
arr.push(new Student("3","bayra"));
arr.push(new Student("4","sainaa"));

function linerSerchbyID(arr, searchvalue){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === searchvalue) {
            return i;
        }
    }
    return -1;
}
const studentIndex =linerSerchbyID(arr, "3");
console.log(arr[studentIndex]);