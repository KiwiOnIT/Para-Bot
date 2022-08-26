const { EmbedBuilder } = require("discord.js")
const { color } = require('./../config.json');
const ms = require("ms");
module.exports = {
    name: "ping",
    description: "Retourne le handler",
    permissions: [""],
    run: async (client, interaction, args) => {
        let début = Date.now();

        let before = new EmbedBuilder() 
        .setColor(color)
        .setDescription(":ping_pong: | Ping")
        .setFooter({ text : interaction.member.user.tag, iconURL : interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024})})
        .setTimestamp()
    
        await interaction.followUp({embeds: [before]}).then(async(m) => {
            let ping = Date.now() - début
    
            let after = new EmbedBuilder()
            .setColor(color)
            .setDescription(`:ping_pong: | Pong : **${ping} ms**`)
            .setFooter({ text : interaction.member.user.tag, iconURL : interaction.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024})})
            .setTimestamp()
    
            await m.edit({embeds: [after]});
        }
)}}