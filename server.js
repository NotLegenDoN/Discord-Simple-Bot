
//////////bot real/////////////
const { Client, MessageEmbed  } = require("discord.js");
const client = new Client();

client.on('ready', () => {
  console.log(`LISTO`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
    var PREFIX = "!";
      if(message.content.startsWith(PREFIX+"say")){
        const args = message.content.split(".");
        let canal = message.mentions.channels.first();
        if(!args[1]){
          return message.channel.send("¿Qué mensaje quieres que envie?");
        }
        if(!canal){
          return message.channel.send("¿A qué canal de texto quieres que envie el mensaje?");
        }
        message.channel.send("Mensaje enviado...").then(message => message.delete({timeout: 5000}));
        canal.send(args[1]);
      }
});

client.login('NzMwMTAyNDUyNjU2OTMwOTg3.XwSnUw.PhXOXQWzpaUVv8xME_VeKVzRwfk');