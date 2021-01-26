const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "ping",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.delete();
        if (message.author.bot) return;
        if (message.channel.type == "dm") return;
        let début = Date.now();
        await message.channel.send(":ping_pong:  Ping").then(async (m) => await m.edit(`:ping_pong:  Pong : **${Date.now() - début} ms**`));
    }
}
