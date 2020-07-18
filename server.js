

const { Client, MessageEmbed, Message  } = require("discord.js");
const client = new Client();



client.on('ready', () => {
  console.log(`ACTIVO`);
    const activities_list = [
      "CASTIGANDO",
      "MAIKRA",
    ];
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length) )
  
     client.user.setActivity(activities_list[index],{
        type: "PLAYING"
      });
    }, 50);
 
});

///NO MENCIONAR///

client.on("message", message => {

        var BATATA = "633798999476011013"

      if (message.mentions.has(NOMENCIONAR) || message.mentions.has(BATATA) || message.mentions.has(PLAYER)){
        if (!message.member.roles.cache.find(roles => roles.id === BATATA)) {
        message.delete()
        const menciones = new MessageEmbed()
        .setTitle("ejemmmmmmmmmmmmm")
        .addField("**NO MENCIONES A DIOCITO**", "O TE PEGARÁ")
        message.channel.send(menciones).then(message => message.delete({timeout: 10000}));
      }
  }});













/////////////////////////////////
/////!say .mensaje. #channel///////////
client.on("message", message => {
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

  ///bienvenida/////
  ///despedida/////
client.login('NzMwMTAyNDUyNjU2OTMwOTg3.XwSnUw.PhXOXQWzpaUVv8xME_VeKVzRwfk');