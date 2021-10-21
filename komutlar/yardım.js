const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setImage('https://r.resimlink.com/TXyPiuF.gif')
.setAuthor("Mübarek Peymacun Yardım Menüsü", message.author.displayAvatarURL())
.setColor("YELLOW")    
	.addFields(
		{ name: '<a:833163860546027563:833163860546027563> Moderasyon', value: 'mp.moderasyon', inline: true },
		{ name: '<a:833163860546027563:833163860546027563> Eğlence', value: 'mp.eğlence', inline: true },
	)
	.addField('<a:833163860546027563:833163860546027563> Sesli Komutları', 'mp.sesli', true)
	.addField('<a:833163860546027563:833163860546027563> Diğer Komutlar', 'mp.diğer', true)
	.addField('<a:833163860546027563:833163860546027563> Sunucumuz', '    [Peymacuns Mekan](https://discord.gg/w3Cp4MzqX3)', true)
	.addField('<a:833163860546027563:833163860546027563> Botun Davet Linki', '   [Davet Et](https://discord.com/oauth2/authorize?client_id=810789115342618704&scope=bot&permissions=2108157183) ', true)

.setFooter(
        "Bu komutu kullanan kullanıcı " + message.author.tag,
        message.author.displayAvatarURL()
      )

message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: '',
    usage: ''
  };