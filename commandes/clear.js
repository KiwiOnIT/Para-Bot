const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "clear",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;

        var embed13 = new Discord.MessageEmbed()
                .setColor(color1)
                .setTitle("<a:red_cross:802974815073206322> Nombre(s) de message(s) à supprimer non défini.")

        if (message.member.hasPermission("MANAGE_MESSAGES")){

        let args1 = message.content.split(" ");

        if (args1[1] == undefined) {
            message.reply(embed13)
            
        }
        else {
            let number = parseInt(args1[1])

            if (isNaN(number)) {
                message.reply(embed13)
                
            }
            else {
                var embed10 = new Discord.MessageEmbed()
                    .setColor(color1)
                    .setTitle("Clear réussi <a:check:803019851614388225>")
                    .setDescription(`${number} messages ont été supprimés`)
                    .setFooter(message.author.username)
                    .setTimestamp()
                message.channel.bulkDelete(number).then(messages => {
                    if( number == 1){
                        var embed14 = new Discord.MessageEmbed()
                        .setColor(color1)
                        .setTitle("Clear réussi <a:check:803019851614388225>")
                        .setDescription(`${number} message a été supprimé`)
                        .setFooter(message.author.username)
                        .setTimestamp()
                        message.reply(embed14)
                    }
                    else{
                        message.reply(embed10)
                    }
                    console.log("Supression de " + messages.size + " message réussi")
                }).catch(err => {
                    console.log("Erreur de clear :" + err);
                })
            }
        }
    }
  }
}
