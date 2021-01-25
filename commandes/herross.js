const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "herross",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        var embed2 = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Commande secret")
            .setDescription("Lisez Berserk")
            .setThumbnail("https://cdn.discordapp.com/attachments/802635195739275346/803363533483016192/ChaiseEnbois.gif")
            .addField(":chair:", "C'est vraiment un radin chaise")
            .setFooter(message.author.username)
            .setTimestamp()
        message.reply(embed2)
    }
}