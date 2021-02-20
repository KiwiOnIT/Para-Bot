const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "ping",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.delete();
        let début = Date.now();

        let before = new Discord.MessageEmbed()
        .setColor(color1)
        .setDescription(":ping_pong: | Ping")
        .setFooter(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
        .setTimestamp()
    
        await message.channel.send(before).then(async(m) => {
            let ping = Date.now() - début
    
            let after = new Discord.MessageEmbed()
            .setColor(color1)
            .setDescription(`:ping_pong: | Pong : **${ping} ms**`)
            .setFooter(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}))
            .setTimestamp()
    
            await m.edit(after);
        }
)}};
