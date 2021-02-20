const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")
module.exports = {
    name: "infobot",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {


    moment.locale('fr');
 
    let { version } = require("discord.js");
 
    cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
            return console.log(err);
        }

        const osPlatform = {
            win32: "Windows 32 bits",
            win64: "Windows 64 bits",
            linux: "Linux"
        }
 
        let embedStats = new Discord.MessageEmbed()
            .setTitle("__**Informations du bot**__")
            .setColor(color1)
            .setThumbnail("https://cdn.discordapp.com/avatars/791364666990264411/db9046775198265328ffd6267b17c37f.png?size=128")
            .addField("Créateur du bot ❯", "  Banane#4826", true)
            .addField("Date de création ❯", `${moment.utc(Client.user.createdTimestamp).format("LL")} (${moment.utc(Client.user.createdTimestamp).fromNow()})`, true)
            .addField("\u200B", "\u200B", false)
            .addField("<:RAM:809740222924455966> RAM Utilisée ❯", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("<:discord_js:809735936748945439> Discord.js ❯", `v${version}`, true)
            .addField("<:nodejs:809734785189937152> Node ❯", `${process.version}`, true)
            .addField("\u200B", "\u200B", false)
            .addField("<:CPU:809763848579186718> CPU ❯", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("\u200B", "\u200B", false)
            .addField("<a:FIRE:809769472537133097> Utilisation CPU ❯", `\`${percent.toFixed(2)}%\``, true)
            .addField("<:Gear:809768651061329961> Architecture ❯", `\`${os.arch()}\``, true)
            .addField("<:PC:809766809124208690> OS ❯", `\`\`${osPlatform[os.platform()]}\`\``, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
            .setTimestamp()
            
            
        message.channel.send(embedStats)
    })
 
}}
 
