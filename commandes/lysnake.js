const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "lysnake",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.delete();
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        var embed12 = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Commande secret")
            .setDescription("use code kroma-lysnake")
            .setThumbnail("https://cdn.discordapp.com/avatars/337210490453229579/a_ca3b5de5f4cebfae880ef0f90d1d6e12.gif")
            .addField("Lysnake", "C'est vraiment le meilleur dev")
            .setFooter(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
            .setTimestamp()
        message.reply(embed12)
    }
}
