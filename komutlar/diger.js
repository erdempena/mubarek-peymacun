const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setImage('https://r.resimlink.com/TXyPiuF.gif')
.setAuthor("Mübarek Peymacun Diğer Komutlar", message.author.displayAvatarURL())
.setColor("YELLOW")    
	.addFields(
		{ name: '<a:833163860546027563:833163860546027563> mp.avatar', value: 'Kullanıcının profil fotoğrafını ve indirme linklerini gösterir. `mp.avatar (Kullanıcı)`', inline: true },
		{ name: '<a:833163860546027563:833163860546027563> mp.afk', value: 'Afk olursunuz. Etiketlenirseniz sebebi gösterir. `mp.afk <sebep>`', inline: true },
	)
	.addField('<a:833163860546027563:833163860546027563> mp.yaz', 'Bota istediğiniz mesajı yazdırır. `mp.yaz <mesaj>`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.istatistik', 'Botun istatistiğini gösterir. `mp.istatistik`', true)
	.addField('<a:833163860546027563:833163860546027563> Sunucumuz', '    [Peymacuns Mekan](https://discord.gg/w3Cp4MzqX3)', true)
	.addField('<a:833163860546027563:833163860546027563> Botun Davet Linki', '   [Davet Et](https://discord.com/oauth2/authorize?client_id=810789115342618704&scope=bot&permissions=2108157183) ', true)


.setColor("YELLOW")  

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
    aliases: ["diğer"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'diğer', 
    description: '',
    usage: ''
  };