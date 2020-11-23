const Discord = require("discord.js")
const fs = require("fs")
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
const seksizaman = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");
const istatistikler = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()
.setFooter("Müslüm Gürses", client.user.avatarURL())
.addField("**Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
.replace("{ping1}", new Date().getTime() - message.createdTimestamp)
.replace("{ping2}", client.ws.ping),true)
.addField("**Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
.addField("**Çalışma süresi**", seksizaman, true)
.addField("**Discord.JS sürüm**", "v" + Discord.version, true)
.addField("**Node.JS sürüm**", `${process.version}`, true)
.addField("**Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
.addField(`**Sunucu Sayısı**`, client.guilds.cache.size, true)
.addField(`**Kullanıcı Sayısı**`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(`**Sunucu Lokasyonu**`, `Turkey, Tekirdag`, true)
.addField('**Botun Sahipleri: ¹⁹⁰⁷Burak#1907 , ☪Habeke Han☪#1453 ')
return message.channel.send(istatistikler);
};

exports.config = {
name: "istatistik",
aliases: ["i"]
};

