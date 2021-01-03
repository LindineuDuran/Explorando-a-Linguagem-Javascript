function incrementar(){
	var valor = 0;

	return ++valor;
}

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log('============================');

var novoValor = 0;
function incrementar2(){
	return ++novoValor;
}

console.log(incrementar2());
console.log(incrementar2());
console.log(incrementar2());
console.log('============================');

// closure - boa prática
function incrementarClosure1(){
	var valor = 0;

	return function(){
		return ++valor;
	}
}

console.log(typeof incrementarClosure1());

var fn = incrementarClosure1();
console.log(fn());
console.log(fn());
console.log(fn());
console.log('============================');

// closure - função autoexecutável
var incrementarClosure2 = (function(){
	var valor = 0;

	return function(){
		return ++valor;
	}
})();

console.log(incrementarClosure2());
console.log(incrementarClosure2());
console.log(incrementarClosure2());