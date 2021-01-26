const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "tbo",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.delete();
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        var embed15 = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Commande secret")
            .addField("toi aussi", "t bo", false)
            .setFooter(message.author.username)
            .setTimestamp()
        message.reply(embed15)
    }
}
