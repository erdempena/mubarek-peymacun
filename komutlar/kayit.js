
  
const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => { 

let aboneyetkili = '840270215219642408'   //Abone yetkilisi rolünün id si!

  if(!message.member.roles.cache.has(aboneyetkili)) 
  return message.channel.send('Bu Komut https://discord.gg/w3Cp4MzqX3 sunucusuna aittir. Eğer bu sunucudaysanız ve kullanamıyorsanız, yetkili değilsiniz demektir.')
  let uye = message.mentions.members.first()
  let etiket = args[1]
  if (!uye) return message.channel.send('Lütfen bir kişi etiketleyiniz.')
  
      setTimeout(function(){
  uye.roles.add(abonerolü)
  },500)
  
  let abonerolü = '598902462941888528'  // Abone rolünün id si
  
  let darkwinner = new Discord.MessageEmbed() 
  .setFooter(
        "Kaydı yapan yetkili " + message.author.tag,
        message.author.displayAvatarURL()
      )
  .setColor("#00fff8")
  .setImage("https://f003.backblazeb2.com/file/iresimyukle/ii1pO.gif")
  .setDescription(`Kullanıcı kayıt edildi.`) 
message.channel.send(darkwinner)

};

exports.conf = {               
  enabled: true,
  guildOnly: true,
    aliases: ['kayit','kayıt'],
  permLevel: 0
}
exports.help = {
  name: 'kayıt',
  description: "Kullanıcıyı kayıt eder",
  usage: 'kayıt' 
}