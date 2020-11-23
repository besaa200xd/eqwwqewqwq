const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
const muslum = require("../ayarlar/bot.json");
 
module.exports.run = (client, message, args) => { 
let pages = [
`**Müslüm Gürses kullanıcıları bilginize;**\n\n Yardım menüsünü görmeden önce Müslüm Gürses'i kullandığınız için sizlere teşekkür ederiz.\n\n Umarım botumuzu beğenerek kullanıyorsunuzdur.\n\n Sizler sayesinde botumuz daha iyi yerlere geliyor.\n\n Eksiklerimiz veya hatalarımızı ` + `\`${muslum.prefix}tavsiye\`` + ` komutu ile bizimle paylaşabilirsiniz.`,         
`**Müslüm Gürses kullanıcı komutları**\n\n` + `\`${muslum.prefix}yardım\`` + `\n Bütün komutları ve açıklamaları gösterir. \n\n` + `\`${muslum.prefix}oynat <Şarkı İsmi>\`` +`\n Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n` + `\`${muslum.prefix}durdur\`` +`\n Müslüm Gürses müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n ` + `\`${muslum.prefix}atla\`` + `\n Oynatılmakta olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n ` + `\`${muslum.prefix}duraklat\`` +` \n Oynatılan olan müziği duraklatır. \n\n ` + `\`${muslum.prefix}devam\`` +`\n Duraklatılan müziği devam ettirir.`,
`**Müslüm Gürses kullanıcı komutları**\n\n` + `\`${muslum.prefix}karıştır\`` +`\n Müzik kuyruğundaki müzikleri karıştırır. \n\n ` + `\`${muslum.prefix}döngü\`` +`\n Müzik kuyruğundaki müzikleri döngü içerisine alır. \n\n ` + `\`${muslum.prefix}çalan\`` +`\n Oynatılan olan müziği gösterir.\n\n  ` + `\`${muslum.prefix}kuyruk\`` +`\n Müzik kuyruğunu gösterir. \n\n ` + `\`${muslum.prefix}kuyruğu-temizle\`` +`\n Müzik kuyruğunu temizler.\n\n ` + `\`${muslum.prefix}ses <1/100>\`` +`\n Oynatılan müziğin ses seviyesini ayarlar.`,
'**Müslüm Gürses Linkler**\n\n**• [Botu Davet et](https://discord.gg/asCQAEA)**'
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/771709618728206366/780374174920867860/indir_1.jpg')
.setAuthor(`Müslüm Gürses Yardım Menüsü`, client.user.avatarURL)
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
module.exports.config = {
name: 'yardım',
aliases: ["help", "y", "h"]
};
 
