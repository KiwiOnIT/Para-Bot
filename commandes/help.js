const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "help",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        var embed = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Help")
            .setDescription("Le prefix = ?")
            .setThumbnail("https://cdn.discordapp.com/attachments/688772025321521204/848673499890974730/image0.png")
            .addField("Commandes moderations:crossed_swords:", "`?kick @user` \n\n `?ban @user` \n\n `?mute @user` \n\n `?unmute @user` \n\n `?clear nombre de message à supprimer` \n\n `?poll sujet du sondage \n\n ?tempmute temps en ms \n\n ?clone`", true)
            .addField("\u200B", "\u200B", true)
            .addField("Commande public :person_standing:", "`?stats @user` \n\n `?infobot` \n\n `?ping` \n\n `?dm @user` \n\n `?juif @user` \n\n `?gay @user` \n\n `?wiki recherche à faire` \n\n `?pourcentage `", true)
            .addField("Commande secret:shushing_face:", "`Chuut...`", true)
            .setFooter(message.author.username)
            .setTimestamp()
        message.channel.send(embed)
    }
}
