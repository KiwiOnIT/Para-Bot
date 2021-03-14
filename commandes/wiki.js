const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
const superagent = require('superagent');
const snekfetch = require('snekfetch');
module.exports = {
    name: "wiki",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {

        const query = args.join(' ');
        const { body } = await snekfetch
            .get('https://fr.wikipedia.org/w/api.php')
            .query({
                action: 'query',
                prop: 'extracts',
                format: 'json',
                titles: query,
                exintro: '',
                explaintext: '',
                redirects: '',
                formatversion: 2
            });
            var embedno = new Discord.MessageEmbed()
        .setTitle("<a:red_cross:802974815073206322> Vous devez mentionner une information à rechercher")
        .setColor(color1)
        if (query.length === 0) return message.channel.send(embedno);
        var embedno2 = new Discord.MessageEmbed()
        .setTitle("<a:red_cross:802974815073206322> Pas de résultats, réessayer avec plus d'informations.")
        .setColor(color1)
        if (body.query.pages[0].missing) return message.channel.send(embedno2);
        const embed = new Discord.MessageEmbed()
            .setColor(color1)
            .setTitle(body.query.pages[0].title)
            .setFooter('Developpé par Banane', 'https://cdn.discordapp.com/avatars/364725904850681856/7b2d6449b050d9e0705d4bb350947dee.png?size=1024')
            .setTimestamp()
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wikipedia-logo-v2-fr.svg/892px-Wikipedia-logo-v2-fr.svg.png')
            .setDescription(body.query.pages[0].extract.substr(0, 2000).replace(/[\n]/g, '\n\n'));
        console.log(`${message.author.tag} a utilisé la commande /wiki`)
        return message.channel.send(embed).catch(console.error);
    }
}
