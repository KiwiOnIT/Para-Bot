const Discord = require("discord.js");
const Client = new Discord.Client;
const { prefix, color1 } = require('./config.json');
const fs = require('fs');
const ms = require("ms");
const moment = require("moment")

Client.commands = new Discord.Collection();


Client.on("ready", () => (
    console.log("bot opérationnel")
));

Client.on("guildMemberAdd", member =>{
    var embedA = new Discord.MessageEmbed()
    .setTitle(member.displayName + " a rejoint le serveur ! Bienvenu à toi !")
    .setDescription("**Nous somme désormais ** **" + member.guild.memberCount + "** **sur le serveur.**")
    .setColor(color1)
    .setThumbnail(member.user.displayAvatarURL())
    member.guild.channels.cache.find(channel => channel.id === "669199146732748830").send(embedA)
    member.roles.add("669196700984016906").then(mbr =>{

    }).catch(() => ({

    }));
});

Client.on("guildMemberRemove", member =>{
    var embedD = new Discord.MessageEmbed()
    .setTitle(member.displayName + " a quitté le serveur.")
    .setDescription("**Nous somme désormais ** **" + member.guild.memberCount + "** **sur le serveur.**")
    .setColor(color1)
    .setThumbnail(member.user.displayAvatarURL())
    member.guild.channels.cache.find(channel => channel.id === "669199146732748830").send(embedD)

})


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

  if(inviteLink.some(word => message.content.toLowerCase().includes(word))) {
        await message.delete();
        var embedlink = new Discord.MessageEmbed()
        .setTitle("**Tu ne peux pas envoyer des liens de serveurs discord !**")
        return message.reply(embedlink)
        .then(message => {
            message.delete({ timeout: 3000 })
          })
    }

    var embedpref = new Discord.MessageEmbed()
    .setColor(color1)
    .setDescription("**Prefix oublier ? Le prefix est `?`.**")
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.mentions.users.first() === Client.user) {
        if(!args[1]) {
            message.channel.send(embedpref);
        }
    }

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = Client.commands.get(cmd);

    if (command)
        command.run(Client, message, args);

       
});

Client.login(process.env.TOKEN);
