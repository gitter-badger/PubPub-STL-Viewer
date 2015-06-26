var express = require('express');
var path = require('path');
var app = require('express')();
var server = require('http').createServer(app);

app.use("/", express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Almost.html');
});

server.listen(3000);