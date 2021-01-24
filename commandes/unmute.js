const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "unmute",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        if (message.member.hasPermission("MANAGE_ROLES")) {
            let mention = message.mentions.members.first();

            if (mention == undefined) {
                var embed3 = new Discord.MessageEmbed()
                    .setColor(color1)
                    .setTitle(":x: Membre pas mentionné.")
                message.reply(embed3);
            }

            else {
                mention.roles.remove("802815689853108237")
                var embed9 = new Discord.MessageEmbed()
                    .setColor(color1)
                    .setTitle(":white_check_mark: Unmute avec succès.")
                message.reply(embed9)
            }
        }
    }
}