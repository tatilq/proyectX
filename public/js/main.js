
	var socket;
	var nombre;
	var inputName;
	window.onload = function(){
		var lista = document.getElementById('lista');
		inputName = document.getElementById('nombre');


		socket = io.connect();

		socket.on('connect', function () {
			console.log("Cliente");
			//socket.emit('identify', "Gerson3");
		});

		socket.on('historia', function(_mensajes)
		{
			for(var i in _mensajes)
			{
				lista.innerHTML += '<li>' + _mensajes[i] +  '</li>';
			}
		});

		socket.on('saludo_global', function(_saludo){
			lista.innerHTML += '<li>' + _saludo +  '</li>';
		})
	};

	function enviar()
	{
		var input = document.getElementById('salida');
		console.log(input.value);
		socket.emit('saludo', inputName.value + ' :: ' + input.value);
	}

	function updateName()
	{
		socket.emit('identify', inputName.value);
	}
