

var express = require('express');
var app = express();
var serv = require('http').Server(app);
var io = require('socket.io')(serv,{});

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
	res.sendFile(__dirname + '/client/recafe1.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(2000);
console.log('SERVER CONNECTION OK');



io.sockets.on('connection',function(socket){
	console.log((new Date())+'socket connection is OK');

	socket.on('happy', function(data){
		console.log( data.reason);
		if(data.reason!=null){
		socket.emit("mesajgitti",{msg:data.reason});//index html için
		//socket.emit("mesajiAl",{msg:data.reason});//restorant için
	}
	});
	socket.on('cafe', function(data){
		console.log(data.reason);
	});
	socket.emit('mesajiAl',{
		msg:'data.reason',
	});
	});
