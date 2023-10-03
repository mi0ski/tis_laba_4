let arr = [1,4,3,2,0,5,-3,23,213];
let count = 0;
for(let elem of arr){
    count++;
    if(elem === 3){
        console.log(count);
        break;
    }
}