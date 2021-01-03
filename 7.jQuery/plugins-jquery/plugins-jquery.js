var valorElement = $('#valor').maskMoney({decimal: ',', thousands: '.', prefix: 'R$ '});
var totalElement = document.getElementById('total');
var totalMascara = $('#total-mascara');
var mascaraConfig = {
						decimal: ',',
						thousands: '.',
						prefix: 'R$ '
					}

valorElement.on('keyup', function(e){
	var total = 0;

	valor = valorElement.maskMoney('unmasked')[0];

	if (valor > 0 && valor < 10) {
		total = valor + valor * 0.3 +5;
	} else if( valor >= 10 && valor < 50){
		total = valor + valor * 0.1 +2;
	} else {
		total = valor;
	}

	totalMascara.maskMoney(mascaraConfig);
	totalMascara.maskMoney('mask', total);
	totalElement.innerHTML = totalMascara.val();
});