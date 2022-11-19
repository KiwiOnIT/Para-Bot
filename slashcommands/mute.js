const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const { color, logs } = require('./../config.json');
const ms = require("ms");

module.exports = {
    name: "mute",
    description: "Mute temporairement un user",
    permissions: [PermissionsBitField.Flags.ModerateMembers],
    options: [
        {
            name: "membre",
            description: "Le membre que l'on veut mute",
            type: "USER",
            required: true
        }, 
        {
            name: 'temps',
            description: 'Le temps du mute',
            type: "STRING",
            required: true
        },
        {
            name: "raison",
            description: "la raison du mute",
            type: "STRING",
            required: false
        }, 
    ],

    run: async (client, interaction, args) => {
        const mention = interaction.options.getUser("membre");
        if (mention.size === 0) {
            return interaction.followUp("**Vous devez mentionner la personne à mute !**");
        }

        const mute = interaction.guild.members.cache.get(mention.id);
        if (!mute) {
            return interaction.followUp("**Cet utilisateur n'est pas sur le serveur !**");
        }

        const duration = interaction.options.getString('temps');
        const reason = interaction.options.getString('raison');

        const milliseconds = ms(duration);
        if (!milliseconds || milliseconds < 1 || milliseconds > 2419200000) {
            return interaction.followUp('Veuillez indiquer une durée valide.');
        }

        await mute.timeout(milliseconds, reason)

        let mute_embed = new EmbedBuilder()
            .setColor(color)
            .setThumbnail(mute.displayAvatarURL())
            .setTitle('Rapport de mute :')
            .setDescription(`**Utilisateur mute :** ${mute.user.tag}\n**Modérateur :** ${interaction.user.tag}\n**Temps : ${duration}** \n**Raison :** ` + reason);
            client.channels.cache.get(logs).send({embeds: [mute_embed]})
        interaction.followUp({ embeds: [mute_embed] })
    }
}
