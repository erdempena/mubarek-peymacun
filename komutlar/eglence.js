const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setImage('https://r.resimlink.com/TXyPiuF.gif')
.setAuthor("Mübarek Peymacun Eğlence Komutları", message.author.displayAvatarURL())
.setColor("YELLOW")    
	.addFields(
		{ name: '<a:833163860546027563:833163860546027563> mp.anime', value: 'Anime fontuyla yazı yazar. (Sayıları desteklemiyor) `mp.anime (yazı)`', inline: true },
		{ name: '<a:833163860546027563:833163860546027563> mp.habbo', value: 'Habbo fontuyla yazı yazar. `mp.habbo (yazı)`', inline: true },
	)
	.addField('<a:833163860546027563:833163860546027563> mp.mcskin', 'Kullanıcının minecraft skinini gösterir. `mp.mcskin (Kullanıcı Adı)`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.dinamik', 'Dinamik logo yapar. `mp.dinamik (yazı)`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.tersyazı', 'Yazdığınız yazıyı tersten yazar. `mp.tersyazı (yazı)`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.kaçcm', 'Ç*künüzün boyunu söyler. `mp.kaçcm`', true)	
	.addField('<a:833163860546027563:833163860546027563> mp.balıktut', 'Balık tutarsınız. `mp.balıktut`', true)
	.addField('<a:833163860546027563:833163860546027563> mp.stresçarkı', 'Stres çarkı çevirirsiniz. `mp.stresçarkı`', true)

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
    aliases: ["yardım eğlence"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'eğlence', 
    description: '',
    usage: ''
  };