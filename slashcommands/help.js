const { color } = require('./../config.json');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "help",
    description: "Retourne l'ensemble des commandes",
    permission: [""],
    run: async (client, interaction, args) => {
        var embed = new EmbedBuilder()
            .setColor(color)
            .setTitle("Help")
            .addFields(
                {name :"Commandes modérations :crossed_swords:",value:"`/kick` \n `/ban` \n `/mute` \n `/poll` \n `/clear`", inline: true},
                {name :"\u200B",value:"\u200B", inline: true},
                {name :"Commande public :person_standing:",value:"`/stats` \n `/infobot` \n `/ping` \n `/wiki`", inline: true}
            )
            .setFooter({ text : interaction.member.user.tag, iconURL : interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024})})
            .setTimestamp()
        interaction.followUp({ embeds: [embed]})
    }
}