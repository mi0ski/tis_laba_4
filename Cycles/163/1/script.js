let arr = ['a', 'b', 'c', 'd', 'e'];

function findElement(array, element){
	let flag = false;
	for(let elem of array){
		if(elem === element){
			document.write("+++")
			flag = true;
			break;
		}
	}
	if(!flag){
		document.write("---");
	}
}

findElement(arr, 'a');