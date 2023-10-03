let obj = {a: 10, b: 20, c: 30, d: 40, e: 50}; 
let sum = 0;

for (const num of Object.values(obj)) {
	const s = num.toString()[0];
  if (s === "1" || s === "2") {
    sum += num;
  }
}

console.log(sum);