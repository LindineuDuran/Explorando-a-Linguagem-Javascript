function Carro(nome, placa){
	this.nome = nome;
	this.placa = placa;
}

var fox = {};
Carro.call(fox, 'Fox', 'AAA-1111');
console.log('fox', fox);

var gol = {};
Carro.apply(gol, ['Fox', 'AAA-1111']);
console.log('gol', gol);