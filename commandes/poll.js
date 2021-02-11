const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "poll",
    category: "commande",
    description: "Returns latency and API ping",
    run: async (Client, message, args) => {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            const embed = new Discord.MessageEmbed()
                .setTitle("📊 __**Sondage**__")
                .addField(thingToEcho, "Répondre avec <a:check:803019851614388225> ou <a:red_cross:802974815073206322>")
                .setColor(color1)
                .setFooter(message.author.username)
                .setTimestamp()
            message.channel.send(embed)
                .then(function (message) {
                    message.react("803019851614388225")
                    message.react("802974815073206322")
                }).catch(function () {
                });
             
        } else {
            var embed15 = new Discord.MessageEmbed()
            .setTitle("<a:red_cross:802974815073206322> tu n'as pas la permission")
            .setColor(color1)
             return message.channel.send(embed15)
            
        } 
    }
}
