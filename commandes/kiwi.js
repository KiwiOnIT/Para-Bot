const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('../config.json');
module.exports = {
    name: "kiwi",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        var embed14 = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Commande secret")
            .setDescription("kiwi :crown:")
            .setThumbnail("https://cdn.discordapp.com/avatars/364725904850681856/a_37634127f7ae766bc96c6e32413c891f.webp")
            .addField(":kiwi:", "C'est vraiment le roi kiwi !")
            .setFooter(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
            .setTimestamp()
        message.reply(embed14)
    }
}

