const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "kick",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        if (message.member.hasPermission("KICK_MEMBERS")) {
            let mention = message.mentions.members.first();

            if (mention == undefined) {
                var embed3 = new Discord.MessageEmbed()
                    .setColor(color1)
                    .setTitle(":x: Membre pas mentionné.")
                message.reply(embed3)
            }
            else {
                if (mention.kickable) {
                    let user = message.mentions.users.first()
                    var embed7 = new Discord.MessageEmbed()
                        .setColor(color1)
                        .setTitle('Rapport de kick :')
                        .setThumbnail(user.displayAvatarURL())
                        .setDescription(`**Kick :** ${user.tag}\n\n**Modérateur :** ${message.author.tag}`);
                    message.channel.send(embed7)
                    mention.kick();
                }
                else {
                    var embed4 = new Discord.MessageEmbed()
                        .setColor(color1)
                        .setTitle(":x: Imposible de kick cet utilisateur.")
                    message.reply(embed4)
                }
            }
        }
    }
}