var ativo = true;
console.log(typeof ativo);
console.log(ativo);

var ativo = false;
console.log(typeof ativo);
console.log(ativo);

var teste = 0;
if (teste) {
	console.log(teste + ' é true');
}
else {
	console.log(teste + ' é false');
}

var teste = 1;
if (teste) {
	console.log(teste + ' é true');
}
else {
	console.log(teste + ' é false');
}

console.log('Situações booleanas')
console.log(!0); //0 é false
console.log(!!0);

console.log(!''); //'' é false
console.log(!!'');

console.log(!NaN); // NaN é false
console.log(!!NaN);

console.log(!null); // null é false
console.log(!!null);

console.log(!undefined); // undefined é false
console.log(!!undefined);

console.log(!false); // false é false
console.log(!!false);

var nome = '';
if(!nome){
	console.log('infome o nome');
}
else{
	console.log(nome);
}

var nome = 'Silvia';
if(!nome){
	console.log('infome o nome');
}
else{
	console.log(nome);
}