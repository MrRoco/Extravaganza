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
        return message.reply('\nThis will be the second installment of the 1v1\n' +
                             '\n' +
                             'The tournament will be held as a 1v1 event on the EU Server and some games will be casted with a 2min delay. \n' +
                             'It will take place in 2 phases over 2 Saturdays, 02.05.2020 and 09.05.2020.\n' +
                             '\n' +
                             'It will be played as a Best of 3 single elimination bracket, the Games for third place will be Bo5 with the Final being a Best of 7.\n' +
                             '\n' +
                             'Seeding will be done randomly and the bracket filled accordingly. \n' +
                             '\n' +
                             'For the games them self they will be played on 3 different Maps (10min each)\n' +
                             '\n' +
                             'Game 1: Big Race Epicenter\n' +
                             'Game 2: Islands Domination\n' +
                             '*Game 3: Archipelago Epicenter\n' +
                             '*Game 4: Islands Domination \n' +
                             '*Game 5: Big Race Epicenter \n' +
                             '*Game 6: Archipelago Epicenter\n' +
                             '*Game 7: Islands Domination\n' +
                             '\n' +
                             'The tiers that will be played are gonna be fixed and are gonna be: T4 - T6 - T7 - T8 - T10\n' +
                             '\n' +
                             'Only tech tree ships for these Tiers will be eligible and it wont be a forced Mirror matchup. Ship picks will be hidden to bring in some strategy but still trying to keep it fair.\n' +
                             '\n' +
                             'RAMMING is forbidden. IF a Ram happens contact a Staff member and send in the replay. The player initiating the Ram will forfeit that game and take the L.\n' +
                             '\n' +
                             'Before each BO3 each player gets a Ban to get rid of one of the Tiers they do not want to play. Higher seeded Player bans first Lower seeded player bans second and the remaining 3 Tiers will be played.\n' +
                             'The higher seeded Player will pick from the remaining 3 Tiers for Game 1.\n' +
                             '\n' +
                             'i.e. P1 bans T4, P2 bans T10, P1 picks T7 Cruisers so G1 will be played with T7 Cruisers on Big Race.\n' +
                             'For G2 P2 gets to pick.\n' +
                             'And G3 will be randomized by a designated Bot.\n' +
                             '*Classes can be picked multiple times.\n' +
                             '\n' +
                             'In the Game for 3rd place all 5 tiers will be played in THIS order:\n' +
                             'G1 - T4\n' +
                             'G2 - T7\n' +
                             'G3 - T10\n' +
                             '*G4 - T8\n' +
                             '*G5 - T6\n' +
                             'Final will be a Bo7 that starts off exactly the same as the 3rd place match and G6 being T9 and G7 a T1 matchup.\n' +
                             '\n' +
                             'G1 - T4\n' +
                             'G2 - T7\n' +
                             'G3 - T10\n' +
                             'G4 - T8\n' +
                             '*G5 - T6\n' +
                             '*G6 - T9\n' +
                             '*G7 - T1\n' +
                             '\n' +
                             'Also in the Finals and 3rd Place Game, G1 will be T4 Cruisers and going from there the loser of each Game gets to pick the Class for the next Game.\n' +
                             '\n' +
                             'Prizepool will be financed through donations\n' +
                             '\n' +
                             'First Place will get 50%\n' +
                             'Second Place will get 30%\n' +
                             'Third Place will get 15%\n' +
                             'Fourth place will get 5%')
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