const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
module.exports = {
    name: "clone",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        message.channel.clone()
        message.channel.delete()
    }}
        