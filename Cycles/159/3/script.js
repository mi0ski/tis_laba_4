let arr = [1,2,3,4,5,-1,-2,-3,-4,-5];
let newArray = [];
for(let elem of arr){
    if(elem > 0){
        newArray.push(elem);
    }
}