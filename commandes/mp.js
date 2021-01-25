const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "dm",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        message.delete()
        message.mentions.users.first().send(args.slice(1).join(' '));

        var embed11 = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle(":white_check_mark: DM envoyé avec succès")
        message.reply(embed11)

        if (mentions == undefined) {
            var embed14 = new Discord.MessageEmbed()
                .setColor(color1)
                .setTitle(":x: Membre à dm non mentionné.")
            message.reply(embed14)
    }
    
}}
