$(function(){
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(e){
		var keyCode = e.keyCode;
		if (keyCode === 13){
			// Disparar o evento...
			atividade.trigger('enter', atividade.val());
			atividade.val('');
		}
	});

	atividade.on('enter', function(e, texto){
		listaAtividades.prepend('<li>' + texto + '</li>');
	});

	atividade.on('enter', function(e, texto){
		alert('Texto digitado: ' + texto);
	});
});