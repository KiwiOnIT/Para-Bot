const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "avocat",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.delete();
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        var embed2 = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Commande secret")
            .setDescription("use code avocat")
            .setThumbnail("https://cdn.discordapp.com/avatars/596504838951403521/a_ebf7204ccce37909b2914f823ee37e49.gif")
            .addField(":avocado:", "C'est vraiment le boss Avocat !")
            .setFooter(message.author.username)
            .setTimestamp()
        message.reply(embed2)
    }
}
