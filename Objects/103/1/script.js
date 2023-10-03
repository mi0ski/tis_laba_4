let obj = {x: 1, y: 2, z: 3};

console.log(obj["x"]);

obj = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj[key]);

obj = {x: 1, y: 2, z: 3};
let sum = obj["x"] + obj["y"] + obj["z"];

console.log(obj);

obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);

