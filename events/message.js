require("dotenv").config()
const kick = require("../commands/kick")
module.exports = (client, message) => {
    if (message.content === 'ping') {
        return message.reply('pong')
    }

    if (message.content === '!commands') {
        let adminRole = message.guild.roles.find("name", "Casters");
        //let modRole = message.guild.roles.find("name", "Staff");

        if(message.member.roles.has(adminRole.id)){
            return message.reply('Test')
        }

        return message.reply('You wish!')
    }


    if (message.content === '!tournament' || message.content === '!rules' || message.content === '!1v1'){
        return message.reply(process.env.RULES)
    }

    if (message.content.startsWith("!kick")) {
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