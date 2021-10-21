const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setImage('https://r.resimlink.com/TXyPiuF.gif')
.setAuthor("Mübarek Peymacun Sesli Komutları", message.author.displayAvatarURL())
.setColor("YELLOW")    
	.addFields(
		{ name: '<a:833163860546027563:833163860546027563> mp.git', value: 'Kişi onay verirse odasına gidersiniz.', inline: true },
		{ name: '<a:833163860546027563:833163860546027563> mp.çek', value: 'Kişi size odasına gelmeniz için davet atar kabul ederseniz gidersiniz.', inline: true },
	)

.setColor("YELLOW")  
    .setDescription(`
**Not** : Bu komutların çalışması için bir ses kanalında bulunmalısınız.
`) 
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
    aliases: ["sesli"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'sesli', 
    description: '',
    usage: ''
  };