/*var express= require("express"),
	app=express(),
	server= require("http").createServer(app),
	io= require("socket.io").listen(server);

	server.listen(3000);
	app.get("/", function(req,res){
		res.sendFile(__dirname + "/public/index.html");
	});

	io.sockets.on("conecction", function(socket){
		console.log("Se ha concetado un nuevo cliente (puerto 3000)");
	});*/


	//validoo 
	/*
var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');

var router = express();

router.use(express.static(path.resolve(__dirname, 'public')));

var server = http.createServer(router);
var io = socketio.listen(server);

var sockets = [];
var mensajes = [];

io.on('connection', function(socket){
	//console.log("Holaa");
	sockets.push(socket);
	//socket.set('name', 'XXX');
	socket.emit('historia', mensajes);

	socket.on('saludo', function(_saludo){
		mensajes.push(_saludo);

		for(var i in sockets)
		{
			sockets[i].emit("saludo_global", _saludo);
		}
	});

	socket.on('identify', function(_name){
		socket.set('name', 'yyyy');
	})
});

server.listen(443,"localhost", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
*/