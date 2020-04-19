require("dotenv").config()
const kick = require("../commands/kick")
module.exports = (client, message) => {
    if (message.content === 'ping') {
        return message.reply('pong')
    }

    if (message.content === '!commands') {
        if(message.member.hasPermission('KICK_MEMBERS')){
            return message.reply('\n!kick @user -> Kicks user froms discord.\n' +
                                 '!ruffle -> will randomly select a ship class & map.\n' +
                                 '!1v1, !rules, !tournament -> will send the tournament information')
        }

        return message.reply('\n!ruffle -> will randomly select a ship class & map.\n' +
                             '!1v1, !rules, !tournament -> will send the tournament information')
    }


    if (message.content === '!tournament' || message.content === '!rules' || message.content === '!1v1'){
        return message.reply(process.env.RULES).then(() => message.reply(process.env.RULES2))
    }

    if (message.content.startsWith("!kick") && message.member.hasPermission('KICK_MEMBERS')) {
        return kick(message)
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