const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "banane",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.delete();
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        var embed14 = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Commande secret")
            .setDescription("Banane :crown:")
            .setThumbnail("https://cdn.discordapp.com/avatars/364725904850681856/ffed90b2dc7f698aa220b6bb6a6fe188.png?size=2048")
            .addField(":banana:", "C'est vraiment le roi Banane !")
            .setFooter(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
            .setTimestamp()
        message.reply(embed14)
    }
}
