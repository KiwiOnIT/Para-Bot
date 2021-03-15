const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
const ms = require("ms");
module.exports = {
    name: "tempmute",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        var embed3 = new Discord.MessageEmbed()
        .setTitle("Vous n\'avez pas la permission d\'utiliser cette commande.")
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(embed3)
        const member = message.mentions.members.first()
        var embed2 = new Discord.MessageEmbed()
        .setTitle("Membre non metionné.")
        if (!member) return message.channel.send(embed2)
        var embed1 = new Discord.MessageEmbed()
        .setTitle("Le bot ne peut pas mute ce membre.")
        if (!member.manageable) return message.channel.send(embed1)
        const duration = args[1]
        var embed4 = new Discord.MessageEmbed()
        .setTitle("Veuillez indiquer une durée valide.")
        if (!duration) return message.channel.send(embed4)
        const reason = args.slice(2).join(' ') || 'Aucune raison fournie.'
        await member.roles.remove("669196700984016906")
        await member.roles.add("791636652627197954")
        let user = message.mentions.users.first()
        let mute_embed = new Discord.MessageEmbed()
            .setColor(color1)
            .setThumbnail(user.displayAvatarURL())
            .setTitle('Rapport de mute :')
            .setDescription(`**Utilisateur mute :** ${user.tag}\n**Modérateur :** ${message.author.tag}\n**Temps : ${ms(ms(duration))}** \n**Raison :** ` + reason);

        // Envoi du message
        message.channel.send(mute_embed);
        user.send(`Hey <@${member.user.id}> tu as été **mute** sur le serveur **Para Bhops** pendant ${ms(ms(duration))}`)
        console.log(`${member.user.tag} est mute`)
        setTimeout(() => {
            if (member.deleted || !member.manageable) return
            member.roles.remove("791636652627197954")
            member.roles.add("669196700984016906")
            user.send(`<@${member.user.id}> j'ai le plaisir de t'annoncer que tu as été **démute** sur le serveur **Para Bhops** `)
            console.log(`${member.user.tag} est démute`)
        }, ms(duration))
    }
}