require("dotenv").config()
const kick = require("../commands/kick")
module.exports = (client, message) => {
    if (message.content === 'ping') {
        return message.reply('pong')
    }

    if (message.content === '!commands') {
        return message.reply('process.env.COMMANDS)
    }

    if (message.content === '!tournament' || message.content === '!rules' || message.content === '!1v1'){
        return message.reply(process.env.RULES).then(() => message.reply(process.env.RULES2))
    }

    if (message.content === '!promo') {
        return message.reply(process.env.PROMO)
    }

    if (message.content === '!casters' || message.content === '!twitch' || message.content === '!stream') {
        return message.reply(process.env.CASTERS)
    }

    if (message.content.startsWith("!ruffle")) {
        const types = process.env.CLASSES.split(',')
        const maps  = process.env.MAPS.split(',')
        const type  = types[Math.floor(Math.random() * types.length)];
        const map   = maps[Math.floor(Math.random() * maps.length)];

        return message.reply(
            `The next round will be played with ${type} on the next map: ${map}`
        )
    }
}