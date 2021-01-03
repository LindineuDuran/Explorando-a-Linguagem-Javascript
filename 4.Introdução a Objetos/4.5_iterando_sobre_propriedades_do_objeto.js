var joao = {
	nome: 'João',
	idade: 25,
	endereco: {
		         logradouro: 'Av. Brasil',
		         numero: 100,
		         complemento: 'Apto 202',
		         cidade: 'Rio de Janeiro',
		         estado: 'RJ'
	          }
}

console.log(joao);
console.log('=============================');

for(var prop in joao){
	console.log(prop, '->', joao[prop]);

	if(prop === 'idade'){
		console.log('Achei a idade');
	}
}
console.log('=============================');