const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setImage('https://r.resimlink.com/TXyPiuF.gif')
.setAuthor("Mübarek Peymacun Moderasyon Menüsü", message.author.displayAvatarURL())
.setColor("YELLOW")  
   .addFields(
		{ name: '<a:833163860546027563:833163860546027563> mp.ban', value: 'Kullanıcıyı banlar. `mp.ban (Kullanıcı) <sebep>`', inline: true },
		{ name: '<a:833163860546027563:833163860546027563> mp.unban', value: 'Kullanıcının banını açar. `mp.unban (Kullanıcı İd) <sebep>`', inline: true },
	)
	.addField('<a:833163860546027563:833163860546027563> mp.kick', 'Kullanıcıyı kickler `mp.kick (Kullanıcı) <sebep>`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.sil', 'Belirttiğiniz miktarda yazıyı siler `mp.sil <miktar>`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.nick ', 'Kullanıcının ismini değiştirir. `mp.nick (Kullanıcı) <yeni isim>`   ', true)
	.addField('<a:833163860546027563:833163860546027563> mp.sunucu-bilgi', 'Sunucu hakkında bilgi verir. `mp.sunucu-bilgi`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.emojiler', 'Sunucudaki emojileri gösterir. `mp.emojiler`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.çekiliş', 'Çekiliş Yaparsınız. `mp.çekiliş`  ', true)
	.addField('<a:833163860546027563:833163860546027563> mp.profil', 'Kullanıcının Profilini gösterir. `mp.profil (Kullanıcı)`', true)
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
    aliases: ["yardım moderasyon"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'moderasyon', 
    description: '',
    usage: ''
  };