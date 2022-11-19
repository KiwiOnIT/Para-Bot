const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder, Discord, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');
const { token, color, logs } = require('./config.json');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

client.slashCommands = new Collection();

fs.readdir("./slashcommands", (err, files) => {
    files = files.filter(f => f.endsWith('.js'));
    files.forEach(file => {
        const command = require(`./slashcommands/${file}`);
        console.log(`Loading slashcommand ${file}`);
        client.slashCommands.set(command.name, command);
    });
});

fs.readdir('./handler/', (err, files) => {
    files = files.filter(f => f.endsWith('.js'));
    files.forEach(f => {
        const event = require(`./handler/${f}`);
        console.log(`Loading event ${f}`);
        client.on(f.split('.')[0], event.bind(null, client));
        delete require.cache[require.resolve(`./handler/${f}`)];
    });
});

client.once('ready', () => {
    console.log('Para bot is online');

    let Embed = new EmbedBuilder()
        .setColor(color)
        .setTitle("Création d'un ticket")
        .setDescription('Créer un ticket')
        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))

    const btn = new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId("ticket")
        .setLabel("Créer un ticket")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("📩"))

        client.channels.cache.get("1041805333103906947").send({embeds: [Embed], components: [btn]})
        console.log('Ticket system ready !')
        const StartedLog = new EmbedBuilder()
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor(color)
            .setTitle('<a:check:803019851614388225> Bot and Ticket system started succesfully')
        client.channels.cache.get(logs).send({embeds: [StartedLog]})
});

client.on("guildMemberAdd", async member => {
    var embedA = new EmbedBuilder()
        .setTitle(member.displayName + " a rejoint le serveur ! Bienvenu à toi !  <a:hey:802975667376750694>")
        .setDescription("**Nous sommes désormais ** **" + member.guild.memberCount + "** **sur le serveur.**")
        .setColor(color)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
    member.guild.channels.cache.get("1012425082200670248").send({ embeds: [embedA] })
    member.roles.add("1012802482386259980")
});

client.on("guildMemberRemove", async member => {
    var embedD = new EmbedBuilder()
        .setTitle(member.displayName + " a quitté le serveur.")
        .setDescription("**Nous sommes désormais ** **" + member.guild.memberCount + "** **sur le serveur.**")
        .setColor(color)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
    const channel = member.guild.channels.cache.get("1012425082200670248")
    channel.send({ embeds: [embedD] })
});

client.login(token);