const Discord = require("discord.js")
const fs = require("fs")

let botid = '751535681754628177'

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Müslüm gürses Linkler`, client.user.avatarURL())
.setDescription('**• [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail('https://cdn.discordapp.com/attachments/771709618728206366/780374174920867860/indir_1.jpg')
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };