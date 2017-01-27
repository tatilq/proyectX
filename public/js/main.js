//hora actual del sistema
var d = new Date();

var horaActual=d.getHours()+':'+d.getMinutes();


/*FILTRO PARA CHATS*/
var search = document.getElementById("search");
var chatsList=document.getElementsByClassName("listaChat");
    //food = document.getElementsByTagName("span"),
var forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
    var choice = this.value;
  
    forEach.call(chatsList, function(f){
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1 )
            f.style.display = "none";        
        else
            f.style.display = "block";        
    });
}, false);
//FIN DE FILTRO PARA CHATS+

/****DEFINICION DE LAS CLASES CHAT, PERSON A.MESSAJE, WHATSSAP**/
function Chat()
{
	this.nombre = '';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}

function Person(_name)
{
	this.name = _name;
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
	this.searchChat		= function(_keyword){};
	this.getChatFromId	= function(_chatId){};
	this.drawChatList	= function(_htmlTarget){
		var ulChatList = document.getElementById('chat-list');

		for (var i in this.chats) {
			console.log(this.chats[i].messages);
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
	this.sendMessage	= function(_message, _in){
		//var htmlMessageIn = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
		//persona que mand a el mensaje
		var htmlMessageOut = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _message.message + '</p><div class="time" >'+horaActual+'</div></div></div>';
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
/*
//creamos las personas que mandaran mensajes
var wapp = new Whatsapp();

var isa = new Person('Isamar');
//var zare = new Person('Zare');

var chat = new Chat();

//chat.people.push(zare);

wapp.chats.push(chat);
wapp.selectedChat = chat;

//wapp.sendMessage(new Message('Hola', zare));
//console.log(tati); //la persona que manda el mensaje

//wapp.sendMessage(new Message('Que tal?', tati)); //para establecer ya mensajes

//console.log(wapp.getLastMessage().sender);
*/
var wapp = new Whatsapp();

var me = new Person('Gerson');
var zare = new Person('Zare');
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
console.log(wapp.getLastMessage().sender);



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
	//chatPanel = document.querySelector('.w-chat-panel');
	//console.log(time);
	inputMessage.addEventListener('keyup', onInputKeyUp);


	//var emojis= document.getElementById('emojis');
	//emojis.addEventListener('click', insertEmoji);
}
/*function insertEmoji(){
	var listemojis= '<li><img class="emoji" src="image/beso.png"></li><li><img class="emoji" src="image/beso.png"></li> <li><img class="emoji" src="image/risa.png"></li><li><img class="emoji" src="image/lentes.png"></li';
	var emojis= document.getElementById('listEmojis');
	emojis.innerHTML= listemojis;
}*/
function onInputKeyUp(evt)
{
	//console.log(evt.keyCode);
	if(evt.keyCode == 13)
	{
		wapp.sendMessage(new Message(evt.target.value, zare));//manda mensajes con el obj tati d ela clase persona 
		mensaje.innerHTML=inputMessage.value;
		hora.innerHTML=horaActual;//id hoa de hora en html
		evt.target.value = '';
	}
}





//funcion que seleciona en toda la lista de chat
var chatsList=document.getElementsByClassName("listaChat");
//var long = chats.children.length;
//console.log(chatsList);//tengo todos los chats en li
                         
	chatsList[0].addEventListener('click',selectChat0);
	chatsList[1].addEventListener('click',selectChat1);
	chatsList[2].addEventListener('click',selectChat2);
	chatsList[3].addEventListener('click',selectChat3);
function selectChat0()
{
	document.getElementById("chat").innerHTML="";
	document.getElementById("chat").innerHTML='<div class="w-message w-message-in"><div class="w-message-text">'+
	'<h5 class="blue-1">Andrea Lamas</h5>'+'<p>Chicos han visto el nuevo corte de Aldo?</p>'+'<div class="time">11:12</div>'+
	 '</div></div><div class="w-message w-message-in"><div class="w-message-text"><h5 class="pink-1">Mariana Costa</h5>'+
	'<p>¿Finalmente se corto?</p><div class="time">11:13</div></div></div><div class="w-message w-message-in"><div class="w-message-text">'+
	'<h5 class="green-1">Maria Paula Rivarola</h5><p>Jajaja Sii finalmente se corto!!</p><div class="time">11:13</div></div>'+'</div>';

}
function selectChat1()
{
	document.getElementById("chat").innerHTML="";
	document.getElementById("avatar").innerHTML="";

	document.getElementById("avatar").innerHTML = '<img src="image/raymi.jpg" alt="" class="wh-44">'+
	'<h4 class="w-contact-name">Raymi Saldomando</h4><p>Ult. vez hoy '+horaActual+' </p>';

	wapp.sendMessage(new Message('Que tal?', me));
	wapp.sendMessage(new Message('Yo muy bien, tu que tal?', zare));

	wapp.selectedChat = chat2;

	wapp.sendMessage(new Message('Hola', me));
	wapp.sendMessage(new Message('Tienes un peine?', liset));

}
function selectChat2()
{
	document.getElementById("chat").innerHTML="";
	document.getElementById("avatar").innerHTML="";

	document.getElementById("avatar").innerHTML = '<img src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" alt="" class="wh-44">'+
	'<h4 class="w-contact-name">Rocio</h4><p>Ult. vez hoy '+horaActual+' </p>';

	wapp.sendMessage(new Message('me prestas dinero?', me));
	wapp.sendMessage(new Message('cuanto deseas?', zare));

	wapp.selectedChat = chat2;
}
function selectChat3()
{
	document.getElementById("chat").innerHTML="";
	document.getElementById("avatar").innerHTML="";

	document.getElementById("avatar").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/5/55/Xbox_NXE_avatar.png" alt="" class="wh-44">'+
	'<h4 class="w-contact-name">Liset</h4><p>Ult. vez hoy '+horaActual+' </p>';

	wapp.selectedChat = chat2;

	wapp.sendMessage(new Message('Hola', me));
	wapp.sendMessage(new Message('Tienes un peine?', liset));

}
