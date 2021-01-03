var pessoa = 'FISICA';
if (pessoa === 'FISICA') {
	// define máscara de CPF: 000.000.000-00
	console.log('Selecionada pessoa física');
} else if (pessoa === 'JURIDICA') {
	// define máscara de CNPJ: 00.000.000/0000-00	
	console.log('Selecionada pessoa jurídica');
} else {	
	console.log('Tipo de pessoa inválido');
}