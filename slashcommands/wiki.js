const { color } = require('./../config.json');
const snekfetch = require('snekfetch');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "wiki",
    description: "Faire une recherche wikipedia",
    permissions : [""],
    option: [
        {
            name: "recherche",
            description: "recherche",
            type: "STRING",
            required: true
        }
    ],
    run: async (client, interaction, args) => {

        const query = interaction.options.getString('recherche');
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
            var embedno = new EmbedBuilder()
        .setTitle("<a:red_cross:802974815073206322> Vous devez mentionner une information à rechercher")
        .setColor(color)
        if (query.length === 0) return interaction.followUp({embeds : [embedno]});
        var embedno2 = new EmbedBuilder()
        .setTitle("<a:red_cross:802974815073206322> Pas de résultats, réessayer avec plus d'informations.")
        .setColor(color)
        if (body.query.pages[0].missing) return interaction.followUp({embeds : [embedno2]});
        const embed = new EmbedBuilder()
            .setColor(color)
            .setTitle(body.query.pages[0].title)
            .setFooter({ text : 'Developpé par Kiwi', iconURL: 'https://cdn.discordapp.com/avatars/364725904850681856/fae71664d629e3cb38fad0641f74c43c.webp'})
            .setTimestamp()
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wikipedia-logo-v2-fr.svg/892px-Wikipedia-logo-v2-fr.svg.png')
            .setDescription(body.query.pages[0].extract.substr(0, 2000).replace(/[\n]/g, '\n\n'));
        return interaction.followUp({embeds : [embed]}).catch(console.error);
    }
}
