const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "ban",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            let mention = message.mentions.members.first();
            var reason = args.slice(1).join(" ") || "non spécifiée";

            if (mention == undefined) {
                var embed3 = new Discord.MessageEmbed()
                    .setColor(color1)
                    .setTitle("<a:red_cross:802974815073206322> Membre pas mentionné.")
                message.reply(embed3)
            }
            else {
                if (mention.bannable) {
                    let user = message.mentions.users.first()
                    let embed6 = new Discord.MessageEmbed()
                    .setColor(color1)
                    .setTitle('Rapport de ban :')
                    .setThumbnail(user.displayAvatarURL())
                    .setDescription(`**Banni :** ${user.tag}\n**Modérateur :** ${message.author.tag}\n**Raison :** ` + reason);
            
                    message.channel.send(embed6)
                    mention.ban({reason : reason });
                }
                else {
                    var embed5 = new Discord.MessageEmbed()
                        .setColor(color1)
                        .setTitle("<a:red_cross:802974815073206322> Imposible de bannir cet utilisateur.")
                    message.reply(embed5)
                }
            }
        }
    }
}
