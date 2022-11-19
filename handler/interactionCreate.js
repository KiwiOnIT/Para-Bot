const Discord = require('discord.js');
const { color, logs } = require('./../config.json');

module.exports = async(client, interaction) => {

    if (interaction.isChatInputCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => { });

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) return interaction.followUp({ content: "Erreur rencontrée " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        if (cmd) {
            if (!interaction.member.permissions.has(cmd.permissions || [])) {
                return interaction.followUp('Vous n\'avez pas la permission d\'utiliser cette commande')
            }
            cmd.run(client, interaction, args);
        }
    }

    if (interaction.isContextMenuCommand()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }


    if(interaction.isButton()) {

        if(interaction.customId === "ticket") {

            let channel = await interaction.guild.channels.create({
                name: `🎫・ticket-${interaction.user.username}`,
                type: Discord.ChannelType.GuildText,
            })
            await channel.setParent(interaction.channel.parent.id)

            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                ViewChannel: false
            })

            await channel.permissionOverwrites.create(interaction.user, {
                ViewChannel: true,
                EmbedLinks: true,
                SendMessages: true,
                AttachFiles: true,
                ReadMessageHistory: true,
            })

            await channel.setTopic(interaction.user.id)

            const Create = new Discord.EmbedBuilder()
                .setColor(color)
                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setTitle('Historique **ticket**')
                .setTimestamp()
                .setDescription(`Ticket de <@${interaction.user.id}> à été correctement créé`)

            client.channels.cache.get(logs).send({embeds: [Create]})
            await interaction.reply({content: `Votre ticket a correctement été créé : ${channel}`, ephemeral: true})

            let Embed = new Discord.EmbedBuilder()
                .setColor(color)
                .setTitle('Ticket')
                .setDescription('Voici votre ticket')
                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))

            const btn = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
                .setCustomId("close")
                .setLabel("Fermé le ticket")
                .setStyle(Discord.ButtonStyle.Danger)
                .setEmoji("🗑️"))

            await channel.send({embeds: [Embed], components: [btn]})            
        }
        if(interaction.customId === "close") {

            let user = client.users.cache.get(interaction.channel.topic)
            try{await user.send("Votre ticket a été fermé")} catch (err) {}

            const Close = new Discord.EmbedBuilder()
                .setColor(color)
                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setTitle('Historique **ticket**')
                .setDescription(`Ticket de <@${interaction.user.id}> à été fermé`)
                .setTimestamp()
            client.channels.cache.get(logs).send({embeds : [Close]})
            await interaction.channel.delete()
        }
    }
}
