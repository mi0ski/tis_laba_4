let obj = {a: 1, b: 2, c: 3, d: 
	4, e: 5}; 
let newObject = {};
for(let key in obj){
	newObject[obj[key]] = key;
}

console.log(newObject);