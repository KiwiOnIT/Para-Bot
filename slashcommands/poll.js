const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const { color } = require('./../config.json');
module.exports = {
    name: "poll",
    description: "Envoie un sondage",
    permissions: [PermissionsBitField.Flags.Administrator],
    options: [
        {
            name: 'question',
            description: 'Le message du sondage',
            type: "STRING",
            required: true
        }
    ],

    run: async (client, interaction, args) => {
        let args2 = interaction.options.getString('question')
        const embed = new EmbedBuilder()
            .setTitle("📊 __**Sondage**__")
            .addFields([
                { name: `${args2}`, value: `Répondre avec  <a:check:803019851614388225> ou <a:red_cross:802974815073206322>` }
            ])
            .setFooter({ text: interaction.member.user.tag, iconURL: interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) })
            .setColor(color)
            .setTimestamp()
        interaction.followUp({ embeds: [embed] })
            .then(function (message) {
                message.react("803019851614388225")
                message.react("802974815073206322")
            }).catch(function () {
            });
    }
}