const Discord = require('discord.js');
exports.run = (client, message, args) => {   

 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send('Skin adı gir kanki')
 if (mesaj == member) {
   message.channel.send('Skin adı belirtmezsen nasıl göstercem?')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('YELLOW')
   .setImage(body)

 message.channel.send(mcbody);
 }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mccilt"],
  permLevel: 0
};

exports.help = {
  name: "mcskin"
};