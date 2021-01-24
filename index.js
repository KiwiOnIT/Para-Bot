const Discord = require("discord.js");
const Client = new Discord.Client;
const { token, prefix, color1 } = require('./config.json');
const fs = require('fs');
const ms = require("ms");
const moment = require("moment")

Client.commands = new Discord.Collection();


Client.on("ready", () => (
    console.log("bot opérationnel")
));

fs.readdir("./commandes/", (error, f) => {
    if (error) console.log(error);
    let commandes = f.filter(f => f.split(".").pop() === "js");
    if (commandes.length <= 0) return console.log("Aucune commande trouvée !");
    commandes.forEach((f) => {
        let commande = require(`./commandes/${f}`);
        console.log(`${f} Commande chargée !`)

        Client.commands.set(commande.name, commande);
    });
});

Client.on("message", async message => {
    const prefix = "?";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = Client.commands.get(cmd);

    if (command)
        command.run(Client, message, args);
});

Client.login(token);