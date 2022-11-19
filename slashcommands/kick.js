const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const { color, logs } = require('./../config.json');
module.exports = {
    name: "kick",
    description: "Expulsion d'un membre",
    permissions: [PermissionsBitField.Flags.KickMembers],
    options: [
        {
            name: "membre",
            description: "Le membre que l'on veut kick",
            type: "USER",
            required: true
        }
    ],
    run: async (client, interaction, args) => {
        const mention = interaction.options.getUser("membre");
        if (mention.size === 0) {
            return interaction.followUp("**Vous devez mentionner la personne à mute !**");
        }

        const kickMember = interaction.guild.members.cache.get(mention.id);
        if (kickMember.kickable) {
            var embed7 = new EmbedBuilder()
                .setColor(color)
                .setTimestamp()
                .setTitle('Rapport de kick :')
                .setThumbnail(kickMember.displayAvatarURL())
                .setDescription(`**Kick :** ${kickMember.user.tag}\n\n**Modérateur :** ${interaction.user.tag}`);
            kickMember.kick();
            client.channels.cache.get(logs).send({embeds: [embed7]})
            return interaction.followUp({embeds: [embed7]})
        }
        else {
            var embed4 = new EmbedBuilder()
                .setColor(color)
                .setTitle("<a:red_cross:802974815073206322> Imposible de kick cet utilisateur.")
            return interaction.followUp({embeds: [embed4]})
        }
    }
}
