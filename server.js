

const { Client, MessageEmbed, Message  } = require("discord.js");
const client = new Client();

client.on('ready', () => {
  console.log(`TE PUEDO CHUPAR UN OJO ${client.user.tag}?`)
  const activities_list = [
    "CASTIGAR A VERA", 
  ];

  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

    client.user.setActivity(activities_list[index],{
      type: "PLAYING"
    });
  }, 5000);
});
 













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