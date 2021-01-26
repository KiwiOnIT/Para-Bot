const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "poll",
    category: "commande",
    description: "Returns latency and API ping",
    run: async (Client, message, args) => {
        message.delete();
        if (message.member.hasPermission("ADMINISTRATOR")) {
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            const embed = new Discord.MessageEmbed()
                .setTitle("📊 __**Sondage**__")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor(color1)
                .setFooter(message.author.username)
                .setTimestamp()
            message.channel.send(embed)
                .then(function (message) {
                    message.react("✅")
                    message.react("❌")
                }).catch(function () {
                });
        } else {
            return message.reply("Tu n'as pas la permission")
        }
    }
}
