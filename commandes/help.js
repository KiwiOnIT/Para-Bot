const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "help",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.delete();
        var embed = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle("Help")
            .setDescription("Le prefix = ?")
            .setThumbnail("https://cdn.discordapp.com/avatars/791364666990264411/db9046775198265328ffd6267b17c37f.png?size=128")
            .addField("Commandes moderations:crossed_swords:", "`?kick @user` \n\n `?ban @user` \n\n `?mute @user` \n\n `?unmute @user` \n\n `?clear **nombre de message à supprimer**` \n\n `?poll **sujet du sondage**` ", true)
            .addField("\u200B", "\u200B", true)
            .addField("Commande fun:partying_face:", "soon", true)
            .addField("\u200B", "\u200B", true)
            .addField("Commande autre:person_standing:", "`?stats @user` \n\n `?infobot` \n\n `?ping` \n\n `?dm @user` \n\n `?juif @user` \n\n `?gay @user`", true)
            .addField("Commande secret:shushing_face:", "`Chuut...`", false)
            .setFooter(message.author.username)
            .setTimestamp()
        message.channel.send(embed)
    }
}
