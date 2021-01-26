const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "tbo",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        var embed15 = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Commande secret")
            .setDescription("toi aussi t bo")
            .setFooter(message.author.username)
            .setTimestamp()
        message.reply(embed15)
    }
}
