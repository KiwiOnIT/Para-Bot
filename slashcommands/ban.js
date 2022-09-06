const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const { color } = require('./../config.json');
module.exports = {
    name: "ban",
    description: "Banissement d'un membre",
    permissions: [PermissionsBitField.Flags.BanMembers],
    options: [
        {
            name: "membre",
            description: "Le membre que l'on veut ban",
            type: "USER",
            required: true
        },
        {
            name: "raison",
            description: "Raison du ban",
            type: "STRING",
            required: true
        }
    ],
    run: async (client, interaction, args) => {
        const mention = interaction.options.getUser("membre");
        const reason = interaction.options.getString("raison");

        const banMember = interaction.guild.members.cache.get(mention.id);
        if (banMember.bannable) {
            var embed7 = new EmbedBuilder()
                .setColor(color)
                .setTitle('Rapport de ban :')
                .setThumbnail(banMember.displayAvatarURL())
                .setDescription(`**Ban :** ${banMember.user.tag}\n\n**Modérateur :** ${interaction.user.tag}\n\n**Raison :**${reason}`);
            banMember.ban({reason : reason });
            return interaction.followUp({embeds: [embed7]})
        }
        else {
            var embed4 = new EmbedBuilder()
                .setColor(color)
                .setTitle("<a:red_cross:802974815073206322> Imposible de ban cet utilisateur.")
            return interaction.followUp({embeds: [embed4]})
        }
    }
}
