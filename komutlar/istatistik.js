const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
const istatistikler = new Discord.MessageEmbed()
.setImage('https://r.resimlink.com/TXyPiuF.gif')
.setColor("YELLOW")  

.addField(`:robot: |  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`:mortar_board: | Yapımcım` ,`<@394549211473117194>`,true)
 .addField(`:rocket: | Toplam Kullanıcı`, `${client.users.cache.size}`, true)
 .addField(`:crystal_ball: | Toplam Sunucu`, `${client.guilds.cache.size}`, true)
  message.channel.send(istatistikler)
}//lrows
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};
exports.help = {
  name: 'i',
  description: 'İstatistik Komutu',
  usage: 'i'
}; 