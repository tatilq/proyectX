/****DEFINICION DE LAS CLASES CHAT, PERSON A.MESSAJE, WHATSSAP****/
function Chat()
{
	this.nombre = '';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}
function Person(_name, _dni)
{
	this.name = _name;
	this.dni = _dni;
	//this.avatar = _avatar;
}
function Message(_message, _sender)
{
	this.message = _message;
	this.sender = _sender;
	this.received = false;
}
function Whatsapp()
{
	this.chats = [];
	this.selectedChat = null;
	/*PERMIT E BUSCAR CHATS POR NOMBRE*/
	this.searchChat	= function(_chatsList){
		var search = document.getElementById("search");
		    //food = document.getElementsByTagName("span"),
		var forEach = Array.prototype.forEach;

		search.addEventListener("keyup", function(e){
		    var choice = this.value;
		  
		    forEach.call(_chatsList, function(f){
		        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1 )
		            f.style.display = "none";        
		        else
		            f.style.display = "block";        
		    });
		}, false);
	};
	this.getChatFromId	= function(_chatId){};
	/////////////
	function changeImage(){
		var divForm= document.getElementById('img_avatar');
		var miUrl= document.getElementById('miUrl').value;
		divForm.firstChild.src=miUrl;
		this.avatar = miUrl;
	};
	function changeImageAvatar(){
		
		var div= document.getElementById('fileImage');
		if( !createdImage ) {
		var html= '<label>URL&nbsp&nbsp</label><input id="miUrl" type="text" name="" placeholder="ingresa el url de tu image"><button class="btn btn-success btn-xs">cambiar</button>';
		div.innerHTML= html;
		div.lastChild.addEventListener('click',changeImage);//boton
		createdImage = true;
		showingImage = true;
	} else {

		if(showingImage) {
			div.style.display = 'none';
			showingImage = false;
		} else {
			div.style.display = 'block';
			showingImage = true;
		}
	}
	};
	
	this.changeImageEvent =function(_chatId){
		var img_avatar =document.getElementById('img_avatar');
		img_avatar.firstChild.addEventListener('click',changeImageAvatar);
	}
	/////////////
	this.drawChatList	= function(_htmlTarget){
		var ulChatList = document.getElementById('chat-list');
		for (var i in this.chats) {
			//console.log(this.chats[i].messages);
			var htmlChatList = '<li class="listaChat"><div class="avatar ">' +
					'<img src="' + this.chats[i].chatAvatar + '" alt="" class="wh-44">' +
					'<h4 class="w-contact-name">' + this.chats[i].nombre +'</h4>' +
					'<p class="w-last-message">' + this.chats[i].messages[this.chats[i].messages.length-1].message + '</p>' +
				'</div>' +
				'<div class="time">03/01/2016</div>' +
			'</li>';
			ulChatList.innerHTML += htmlChatList;
		}
	};
	this.drawMessageList= function(){
		var divChat = document.getElementById('chat');
		divChat.innerHTML = '';

		for (var i in this.selectedChat.messages) {
			if (object.hasOwnProperty(i)) {
				//console.log(this.selectedChat.messages[i]);
				this.sendMessage(this.selectedChat.messages[i], false);
			}
		}
	};
	this.getLastMessage = function(){
		return this.selectedChat.messages[this.selectedChat.messages.length-1];
	};
	this.getDateMessage= function(){
		var date= new Date();
		var hour= date.getHours();
		var minute= date.getMinutes();
		if(minute<10){
			minute='0'+minute;
		}
		var horaActual= hour+":"+minute;
		return horaActual;
	};
	this.sendMessage= function(_message, _in ){
		
		//var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
		//persona que mand a el mensaje
		var htmlMessageOut = '<div class="w-message w-message-in"><div class="w-message-text"><h5>'+this.name+'</h5><p>' + _message.message + '</p><div class="time" >'+this.getDateMessage()+'</div></div></div>';
		var divChat = document.getElementById('chat');

		this.selectedChat.messages.push(_message);

		if(_in)
		{
			divChat.innerHTML += htmlMessageIn;
		}else{

			divChat.innerHTML += htmlMessageOut;
		}

		divChat.scrollTop = divChat.scrollHeight;
	};
}
/****************INSTANCIACION DE OBJETOS*****************/

//creamos las personas que mandaran mensajes
var wapp = new Whatsapp();
wapp.name="tati";
var chatsList=document.getElementsByClassName("listaChat");
wapp.searchChat(chatsList);
var me = new Person();
me.name="sheyla";
var zare = new Person();
zare.name="zarela";
var liset = new Person('Liset');

//ceacion de chats
var chat = new Chat();
chat.nombre = "Rocio";
chat.people.push(zare);
chat.chatAvatar = 'https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png';

wapp.chats.push(chat);


var chat2 = new Chat();
chat2.nombre = "Liset";
chat2.chatAvatar = 'https://upload.wikimedia.org/wikipedia/en/5/55/Xbox_NXE_avatar.png';
chat2.people.push(liset);

wapp.chats.push(chat2);

wapp.selectedChat = chat;
//fin de creacion de mensajes

wapp.sendMessage(new Message('Que tal?', me));
wapp.sendMessage(new Message('Yo muy bien, tu que tal?', zare));

wapp.selectedChat = chat2;

wapp.sendMessage(new Message('Hola', me));
wapp.sendMessage(new Message('Tienes un peine?', liset));

wapp.drawChatList();
/****************LLAMADA A LA FUNCION CON E EVENTO KEYUP*************/
window.onload = init;

var inputMessage;
var divChat;
var chatPanel;



function init()
{
	inputMessage = document.getElementById('mensajes');//inputs de mensajes
	divChat = document.getElementById('chat');//contenedor de chats
	var time = document.getElementsByClassName('time');

	inputMessage.addEventListener('keyup', onInputKeyUp);                     
}     
function onInputKeyUp(evt)
{
	//console.log(evt.keyCode);
	if(evt.keyCode == 13)
	{
		wapp.sendMessage(new Message(evt.target.value, zare.name));//manda mensajes con el obj tati d ela clase persona 
		mensaje.innerHTML=inputMessage.value;
		hora.innerHTML=wapp.getDateMessage();
		evt.target.value = '';
	}
}
//funcion que seleciona en toda la lista de chat
var chatsList=document.getElementsByClassName("listaChat");
                        
	chatsList[0].addEventListener('click',selectChat0);
	chatsList[1].addEventListener('click',selectChat1);
	chatsList[2].addEventListener('click',selectChat2);
	

function selectChat0()
{
	document.getElementById("chat").innerHTML="";
	document.getElementById("avatar").innerHTML="";

	document.getElementById("avatar").innerHTML = '<img src="image/raymi.jpg" alt="" class="wh-44">'+
	'<h4 class="w-contact-name">Raymi Saldomando</h4><p>Ult. vez hoy </p>';

	wapp.sendMessage(new Message('Que tal?', me));
	wapp.sendMessage(new Message('Yo muy bien, tu que tal?', zare));

	wapp.selectedChat = chat2;

	wapp.sendMessage(new Message('Hola', me));
	wapp.sendMessage(new Message('Tienes un peine?', liset));

}
function selectChat1()
{
	document.getElementById("chat").innerHTML="";
	document.getElementById("avatar").innerHTML="";

	document.getElementById("avatar").innerHTML = '<img src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" alt="" class="wh-44">'+
	'<h4 class="w-contact-name">Rocio</h4><p>Ult. vez hoy  </p>';

	wapp.sendMessage(new Message('me prestas dinero?', me));
	wapp.sendMessage(new Message('cuanto deseas?', zare));

	wapp.selectedChat = chat2;
}
function selectChat2()
{
	document.getElementById("chat").innerHTML="";
	document.getElementById("avatar").innerHTML="";

	document.getElementById("avatar").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/5/55/Xbox_NXE_avatar.png" alt="" class="wh-44">'+
	'<h4 class="w-contact-name">Liset</h4><p>Ult. vez hoy </p>';
	wapp.selectedChat = chat2;

	wapp.sendMessage(new Message('Hola', me));
	wapp.sendMessage(new Message('Tienes un peine?', liset));

}
