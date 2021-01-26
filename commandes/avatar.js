const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "avatar",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.delete();
    const embed = new Discord.MessageEmbed()

    if(!message.mentions.users.first()){
        embed.setTitle("Ton Avatar:")
        embed.setImage(message.author.displayAvatarURL())
        embed.setColor(color1)
        .setFooter(message.author.username)
        .setTimestamp()
        return message.channel.send(embed)
    }else{
        const user = message.mentions.users.first()
        embed.setTitle(`Avatar de ${user.tag}:`)
        embed.setImage(user.displayAvatarURL())
        embed.setColor(color1)
        .setFooter(message.author.username)
        .setTimestamp()
        return message.channel.send(embed)
    }
}
}
