

const { Client, MessageEmbed, Message  } = require("discord.js");
const client = new Client();



client.on('ready', () => {
  console.log(`ACTIVO`);
    const activities_list = [
      `Activity1`,
      `Activiti2`,
      `Activity3`
      //puedes anãdir quantas actividades quieras
    ];
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length) )
  
     client.user.setActivity(activities_list[index],{
        type: "PLAYING" 
      });
    }, 50);
 
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
  client.on('guildMemberAdd', (member) => {
    let embedwelcome = new MessageEmbed() 
       .setThumbnail(member.user.displayAvatarURL)
       .setAuthor(` Bienvenido ${member.user.username}`,"https://cdn.discordapp.com/emojis/680807826981257218.gif?v=1")
       .setDescription(`**¡Bienvenido a ${member.guild.name} !**
Recuerda visitar el canal <#ID DEL CANAL DE REGLAS> para no tener problemas `)
       .setFooter(`Eres em miembro numero ${member.guild.memberCount}`)
       .setColor("RANDOM") 
     let channel = client.channels.get('ID DEL CANAL DE BIENVENIDAS'); 
     channel.send(embedwelcome); 
  
  });
  ///despedida/////
  client.on('guildMemberRemove', (member) => {
    let embedbye = new MessageEmbed() 
       .setThumbnail(member.user.displayAvatarURL)
       .setDescription(`${+member.guild.name} se nos fué`)
       .setFooter(`Total de miembros ${member.guild.memberCount}`)
       .setColor("RANDOM") 
     let channel = client.channels.get('ID DEL CANAL DE DESPEDIDAS'); 
     channel.send(embedbye); 
  
  });
  ////////////////////////////////////////////
client.login('NzMwMTAyNDUyNjU2OTMwOTg3.XwSnUw.PhXOXQWzpaUVv8xME_VeKVzRwfk');
