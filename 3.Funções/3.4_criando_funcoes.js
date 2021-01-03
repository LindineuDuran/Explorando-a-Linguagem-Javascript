// function declaration
function somar(a, b){
	console.log('arguments ->', arguments);
	return a + b;
}

// function declaration sem return
function multiplicar(a, b){
	a * b;
}

// function expression
var subtrair = function (a, b){ return a - b;}

console.log('typeof subtrair:', typeof subtrair);

// function expression sem return
var dividir = function (a, b){a / b;}

var soma = somar(2, 3);
console.log('2 + 3 =', soma);

var multiplicacao = multiplicar(2, 3);
console.log('2 * 3 =', multiplicacao);

// hoisting não funciona com function expression
var subtraido = subtrair(6, 2);
console.log('6 - 2 =', subtraido);

var divisao = dividir(10, 2);
console.log('10 / 2 =', divisao);