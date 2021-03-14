const Discord = require("discord.js");
const Client = new Discord.Client;
const moment = require("moment")
const { color1 } = require('./../config.json');

module.exports = {
  name: "stats",
  category: "Commandes",
  description: "envoie les informations de l'utilisateur",

  run: async (client, message, args) => {


    moment.locale("fr");
    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.MessageEmbed()
      .setColor(color1)
      .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .addField(":100:  Pseudonyme ❯", user.username)
      .addField(":credit_card: ID ❯", user.id)
      .addField(":earth_americas: Création de compte ❯", moment.utc(user.createdAt).format("LLLL"))
      .addField(" :computer: A rejoint le serveur le ❯", moment.utc(user.joinedAt).format("LLLL"))
      .setFooter(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
      .setTimestamp()
    message.channel.send(embed);
  }
}
