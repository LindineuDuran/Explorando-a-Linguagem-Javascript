var nomes = ['João', 'Pedro', 'Maria', 'José'];

for(var i = 0; i < nomes.length; i++){
	console.log('nome[',i,']=', nomes[i]);
}

nomes.forEach(function(e){
	console.log(e);
});