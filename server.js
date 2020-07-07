const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

//////////bot real/////////////
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`LISTO`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzMwMTAyNDUyNjU2OTMwOTg3.XwSnUw.PhXOXQWzpaUVv8xME_VeKVzRwfk');