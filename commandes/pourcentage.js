const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "pourcentage",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
const amount = args[0]
const maximum = args[1]
if (!amount) return message.channel.send('Un nombre doit être spécifié');
if (!maximum) return message.channel.send('Un maximum doit être spécifié');
const percentage = (amount / maximum) * 100;

const embed = new Discord.MessageEmbed()
    .setColor(color1)
    .setTitle(`Pourcentage - ${message.author.username}`)
    .addField("Pourcentage à résoudre :", `\`\`\`css\n${amount} pourcentage de ${maximum} \`\`\``)
    .addField("Réponse :", `\`\`\`css\n${percentage} %\`\`\``)
    .setThumbnail("https://cdn.discordapp.com/attachments/596689931749818398/802649104731078696/pourcentage-2-51962.png")

message.channel.send(embed)
}
}