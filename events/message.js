require("dotenv").config()
const Discord = require("discord.js")
const alphaSort = require('alpha-sort');
kick = require("../commands/kick")
module.exports = (client, message) => {
    const prefix = '!';
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith("ping")) {
        return message.reply('pong')
    }

    if (message.content.startsWith("pong")) {
        return message.reply('ping')
    }

    if (message.content === '!commands') {
        return message.reply('\n' + process.env.COMMANDS)
    }

    if (message.content === '!faq') {
        return message.reply('\n' + process.env.FAQ).then(() => message.reply('\n' +process.env.FAQ2))
    }

    if (message.content === '!tournament' || message.content === '!rules' || message.content === '!1v1'){
        return message.reply('\n' +process.env.RULES).then(() => message.reply('\n' +process.env.RULES2))
    }

    if (message.content === '!promo') {
        return message.reply('\n' +process.env.PROMO)
    }

    if (message.content === '!casters' || message.content === '!twitch' || message.content === '!stream') {
        return message.reply('\n' +process.env.CASTERS)
    }

    if (message.content === '!leaderboard') {
        return message.reply('\n https://challonge.com/1v1EVII')
    }

    if (message.content === '!list') {
        const roleID = "701881535757942814";
        const membersWithRole = message.guild.roles.cache.get(roleID).members
        const memberSize = membersWithRole.size;
        const players = membersWithRole.map(member => {
            return member.user.username;
        }).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

        // inside a command, event listener, etc.
        const embed = new Discord.MessageEmbed()
            .setColor('#0xFFFF')
            .setTitle('Players total: ' + memberSize)
            .setDescription(players.join("\n"))
            .setTimestamp();

        return message.channel.send({embed});
    }

    if (message.content === '!list') {
        const roleID = "701881535757942814";
        const membersWithRole = message.guild.roles.cache.get(roleID).members
        const memberSize = membersWithRole.size;
        const players = membersWithRole.map(member => {
            return member.user.username;
        }).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

        // inside a command, event listener, etc.
        const embed = new Discord.MessageEmbed()
            .setColor('#0xFFFF')
            .setTitle('Players total: ' + memberSize)
            .setDescription(players.join("\n"))
            .setTimestamp();

        return message.channel.send({embed});
    }

    if (message.content === '!group1') {
        const roleID = "704757160042561536";
        const membersWithRole = message.guild.roles.cache.get(roleID).members
        const memberSize = membersWithRole.size;
        const players = membersWithRole.map(member => {
            return member.user.username;
        }).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

        // inside a command, event listener, etc.
        const embed = new Discord.MessageEmbed()
            .setColor('#0xFFFF')
            .setTitle('Players total: ' + memberSize)
            .setDescription(players.join("\n"))
            .setTimestamp();

        return message.channel.send({embed});
    }

    if (message.content === '!group2') {
        const roleID = "704757529241976908";
        const membersWithRole = message.guild.roles.cache.get(roleID).members
        const memberSize = membersWithRole.size;
        const players = membersWithRole.map(member => {
            return member.user.username;
        }).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

        // inside a command, event listener, etc.
        const embed = new Discord.MessageEmbed()
            .setColor('#0xFFFF')
            .setTitle('Players total: ' + memberSize)
            .setDescription(players.join("\n"))
            .setTimestamp();

        return message.channel.send({embed});
    }

    if (message.content === '!group3') {
        const roleID = "704757561328402432";
        const membersWithRole = message.guild.roles.cache.get(roleID).members
        const memberSize = membersWithRole.size;
        const players = membersWithRole.map(member => {
            return member.user.username;
        }).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

        // inside a command, event listener, etc.
        const embed = new Discord.MessageEmbed()
            .setColor('#0xFFFF')
            .setTitle('Players total: ' + memberSize)
            .setDescription(players.join("\n"))
            .setTimestamp();

        return message.channel.send({embed});
    }

    if (message.content === '!group4') {
        const roleID = "704757584472703126";
        const membersWithRole = message.guild.roles.cache.get(roleID).members
        const memberSize = membersWithRole.size;
        const players = membersWithRole.map(member => {
            return member.user.username;
        }).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

        // inside a command, event listener, etc.
        const embed = new Discord.MessageEmbed()
            .setColor('#0xFFFF')
            .setTitle('Players total: ' + memberSize)
            .setDescription(players.join("\n"))
            .setTimestamp();

        return message.channel.send({embed});
    }

    if (message.content === '!final-16') {
        const roleID = "707511394026651749";
        const membersWithRole = message.guild.roles.cache.get(roleID).members
        const memberSize = membersWithRole.size;
        const players = membersWithRole.map(member => {
            return member.user.username;
        }).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

        // inside a command, event listener, etc.
        const embed = new Discord.MessageEmbed()
            .setColor('#0xFFFF')
            .setTitle('Players total: ' + memberSize)
            .setDescription(players.join("\n"))
            .setTimestamp();

        return message.channel.send({embed});
    }

    if (message.content.startsWith("!ruffle")) {
        const types = process.env.CLASSES.split(',')
        const maps  = process.env.MAPS.split(',')
        const type  = types[Math.floor(Math.random() * types.length)];
        const map   = maps[Math.floor(Math.random() * maps.length)];

        return message.reply(
            '\n' + `The next round will be played with ${type} on the next map: ${map}`
        )
    }

    if (command === 'ban') {
        if(!message.member.roles.cache.some(r=>["Original Team", "Staff", "Group-1", "Group-2", "Group-3", "Group-4"].includes(r.name)) ) {
            return;
        }

        const channel = message.guild.channels.cache.get('705038712417026108');
        var role = 'Final-16';
        if(message.member.roles.cache.has('704757529241976908')) {
            role = 'Group-2';
        } else if (message.member.roles.cache.has('704757561328402432')) {
            role = 'Group-3';
        } else if (message.member.roles.cache.has('704757584472703126')) {
            role = 'Group-4';
        }

        if (args[1]) {
            return channel.send(`${role}: ${args[1]} has blocked tier: ${args[0]}`);
        }

        return channel.send(`${role}: ${message.author.username} has blocked tier: ${args[0]}`);
    }


    if (command === 'class') {
        if(!message.member.roles.cache.some(r=>["Original Team", "Staff", "Group-1", "Group-2", "Group-3", "Group-4"].includes(r.name)) ) {
            return;
        }

        const channel = message.guild.channels.cache.get('705038712417026108');
        var role = 'Final-16';
        if(message.member.roles.cache.has('704757529241976908')) {
            role = 'Group-2';
        } else if (message.member.roles.cache.has('704757561328402432')) {
            role = 'Group-3';
        } else if (message.member.roles.cache.has('704757584472703126')) {
            role = 'Group-4';
        }

        if (args[1]) {
            return channel.send(`${role}: ${args[1]} has chosen class: ${args[0]}`);
        }

        return channel.send(`${role}: ${message.author.username} has chosen class: ${args[0]}`);
    }


    if (command === 'win') {
        if(!message.member.roles.cache.some(r=>["Original Team", "Staff", "Group-1", "Group-2", "Group-3", "Group-4"].includes(r.name)) ) {
            return;
        }

        const channel = message.guild.channels.cache.get('705038712417026108');
        //const channel = client.channels.fetch(705038712417026108) as Discord.TextChannel;
        var role = 'Group-1';
        if(message.member.roles.cache.has('704757529241976908')) {
            role = 'Group-2';
        } else if (message.member.roles.cache.has('704757561328402432')) {
            role = 'Group-3';
        } else if (message.member.roles.cache.has('704757584472703126')) {
            role = 'Group-4';
        }

        if (args[1]) {
            return channel.send(`${role}: ${args[1]} has won with the following score: ${args[0]}`);
        }

        return channel.send(`${role}: ${message.author.username} has won with the following score: ${args[0]}`);
    }
}
