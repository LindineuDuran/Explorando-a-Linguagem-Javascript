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
console.log('Cidade em que o João mora', joao.endereco.cidade);
console.log('Estado', joao['endereco']['estado']);
console.log('=========================================');

joao.endereco.numero = 101;
console.log(joao);
console.log('=========================================');

var enderecoJoao = {
	logradouro: 'Av. Brasil',
	numero: 100,
	complemento: 'Apto 202',
	cidade: 'Rio de Janeiro',
	estado: 'RJ'
}

var joao = {
	nome: 'João',
	idade: 25,
	endereco: enderecoJoao
}

console.log(joao);
console.log('=========================================');