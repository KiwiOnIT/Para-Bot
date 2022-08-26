const moment = require("moment")
const { color } = require('./../config.json');
const { EmbedBuilder } = require("discord.js")

module.exports = {
  name: "stats",
  description: "envoie les informations de l'utilisateur",
  permission: [""],
  options: [
    {
      name: "membre",
      description: "Le membre dont on veux les informations",
      type: "USER",
      required: false
    }
],

  run: async (client, interaction, args) => {

    moment.locale("fr");

    if (interaction.options.getUser("membre")) {
        const mention = interaction.options.getUser("membre");
        user = interaction.guild.members.cache.get(mention.id);
    } else {
        user = interaction.member;
    }

    const member = interaction.guild.members.cache.get(user.id);
    let embed = new EmbedBuilder()
        .setColor(color)
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addFields(
            {name: ":100:  Pseudonyme ❯", value: `${member.user.username}`},
            {name: ":credit_card: ID ❯", value: `${member.user.id}`},
            {name: ":earth_americas: Création de compte ❯", value: `${moment.utc(member.user.createdAt).format("LLLL")}`},
            {name: ":computer: A rejoint le serveur le ❯", value: `${moment.utc(user.joinedAt).format("LLLL")}`},
        )
        .setFooter({ text : interaction.member.user.tag, iconURL : interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024})})
        .setTimestamp()
        interaction.followUp({ embeds: [embed]});
  }
}