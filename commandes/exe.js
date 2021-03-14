const Discord = require("discord.js");
const Client = new Discord.Client;
const { color1 } = require('./../config.json');
const { inspect } = require('util');
module.exports = {
    name: "exe",
    category: "commandes",
    description: "Retourne le handler",
    run: async (Client, message, args) => {


if(message.author.id == "364725904850681856") {
    let toEval = args.join(" ");
    let evaluated = inspect(eval(toEval, { depth: 0 } ))
    try {
        if(toEval) {
            let hrStart = process.hrtime()
            let hrDiff;
            hrDiff = process.hrtime(hrStart)
            return message.channel.send(`<a:check:803019851614388225> | Éxécuté en ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
            
        } else {
            message.channel.send("Error whilst evaluating: `cannot evaluated air`")
        }
    } catch(e) {
        message.channel.send(`Error whilst evaluating: \`${e.message}\``)
    }
} else {
    return message.reply(" Vous n'avez pas la permission d'éxécuter cette commande.").then(m => m.delete(10000))
}}}
