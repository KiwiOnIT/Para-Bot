const { EmbedBuilder } = require("discord.js")
const { color } = require('./../config.json');
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")
module.exports = {
    name: "infobot",
    description: "Retourne le handler",
    Permissions: [""],
    run: async (client, interaction, args) => {

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
 
        let embedStats = new EmbedBuilder()
            .setTitle("__**Informations du bot**__")
            .setColor(color)
            //.setThumbnail("")
            .addFields(
                {name: "Créateur du bot ❯", value: "  Kiwi#7975", inline: true},
                {name: "Date de création ❯", value: `${moment.utc(client.user.createdTimestamp).format("LL")} (${moment.utc(client.user.createdTimestamp).fromNow()})`, inline: true},
                {name: "\u200B", value: "\u200B", inline: false},
                {name: "<:RAM:809740222924455966> RAM Utilisée ❯", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, inline: true},
                {name: "<:discord_js:809735936748945439> Discord.js ❯", value: `v${version}`, inline : true},
                {name: "<:nodejs:809734785189937152> Node ❯", value: `${process.version}`, inline : true},
                {name: "\u200B", value: "\u200B", inline: false},
                {name: "<:CPU:809763848579186718> CPU ❯", value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``},
                {name: "\u200B", value: "\u200B", inline: false},
                {name: "<a:FIRE:809769472537133097> Utilisation CPU ❯", value: `\`${percent.toFixed(2)}%\``, inline: true},
                {name: "<:Gear:809768651061329961> Architecture ❯", value: `\`${os.arch()}\``, inline: true},
                {name: "<:PC:809766809124208690> OS ❯", value: `\`\`${osPlatform[os.platform()]}\`\``, inline: true},
            )
            .setFooter({ text : interaction.member.user.tag, iconURL : interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024})})
            .setTimestamp()
            
        interaction.followUp({ embeds: [embedStats]})    
    })
 
}}