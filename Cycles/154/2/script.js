let arr = [1,4,3,2,0,5,-3,23,213];
let res = 0;
for(let elem of arr){
    res += elem;
    if(elem < 0){
        console.log(res);
        break;
    }
}