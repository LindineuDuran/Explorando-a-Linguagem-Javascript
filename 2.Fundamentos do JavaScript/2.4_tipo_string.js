var x = 'AlgaWorks';
console.log(x);
console.log(typeof x);

var y = "AlgaWorks";
console.log(y);
console.log(typeof y);

console.log(x.length);

var a = 'AlgaWorks';
var b = 'AlgaWorks';
console.log(a === b);

var m = 'Seja bem vindo a AlgaWorks';
console.log(m.indexOf('vindo'));
console.log(m.lastIndexOf);
console.log(m.indexOf('a'));
console.log(m.lastIndexOf('a'));
console.log(m.indexOf('z'));

var indice = m.indexOf('a');
console.log(indice);

var s = 'A arte de programar';
console.log(s.substring(2, 6));
console.log(s.substring(2));
console.log(s.slice(2, 6));
console.log(s.slice(-9));
console.log(s.substr(2, 4));

var m = 'Seja bem vindo <nome>';
console.log(m.replace('<nome>', 'Lindineu'));
console.log(m.toUpperCase());
console.log(m.toLowerCase());

var m = 'Olá' + ' ' + 'Ricardo';
console.log(m);

var m = 'Olá'.concat(' ' + 'Ricardo');
console.log(m);
console.log(m.charAt(4));