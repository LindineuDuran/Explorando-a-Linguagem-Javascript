console.log(typeof null);
console.log(typeof undefined);

var teste1 = null === undefined;
console.log(teste1);

var teste2 = null == undefined;
console.log(teste2);

var x;
console.log(x);

console.log(x === undefined);

console.log(x === null);

if(x != null){
	console.log('Existe um valor em x: ', x);
} else {
	console.log('x não tem um valor útil');
}