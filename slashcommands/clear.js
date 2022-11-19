const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const { color, logs } = require('./../config.json');
module.exports = {
    name: "clear",
    description: "clear un nombre precis de message",
    permissions: [PermissionsBitField.Flags.ManageMessages],
    option: [
        {
            name: "nombre",
            description: "nombre de messages à supprimés",
            type: "STRING",
            required: true
        }
    ],
    run: async (client, interaction, args) => {

        const number = interaction.options.getString('nombre');

        var embed10 = new EmbedBuilder()
            .setColor(color)
            .setTitle("Clear réussi <a:check:803019851614388225>")
            .setDescription(`${number} messages ont été supprimés`)
            .setFooter({ text: interaction.member.user.tag, iconURL: interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) })
            .setTimestamp()
        interaction.channel.bulkDelete(number).then(messages => {
            if (number == 1) {
                var embed14 = new EmbedBuilder()
                    .setColor(color)
                    .setTitle("Clear réussi <a:check:803019851614388225>")
                    .setDescription(`${number} message a été supprimé`)
                    .setFooter({ text: interaction.member.user.tag, iconURL: interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) })
                    .setTimestamp()
                    client.channels.cache.get(logs).send({embeds: [embed14]})
                interaction.channel.send({ embeds: [embed14] }).then(msg =>
                    setTimeout(() => {
                        msg.delete()
                    }, 3000)
                )
            }
            else {
                client.channels.cache.get(logs).send({embeds: [embed10]})
                interaction.channel.send({ embeds: [embed10] }).then(msg =>
                    setTimeout(() => {
                        msg.delete()
                    }, 3000)
                )
            }
            console.log("Suppression de " + messages.size + " messages réussi")
        }).catch(err => {
            console.log("Erreur de clear :" + err);
        })
    }
}