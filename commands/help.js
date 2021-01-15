module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args, Discord) {
        const { member, mentions } = message

        const embed = new Discord.MessageEmbed()
            .setColor('#1ecbe1')
            .setTitle('Settings for Shibah\'s Utilities bot')
            .addFields(
                { name: 'Prefix:', value: '"-"' },
                { name: '\u200B', value: '\u200b' },
                { name: '-help', value: 'Shows the commands this bot can perform.' },
                { name: '-ping', value: 'Shows the bot\'s Latency and API Latency' },
                { name: '-userinfo', value: 'Shows the user\'s information '},
                { name: '-mute @user {1s/1h/1d}', value: 'Mutes a user for a certain time period or forever. ' },
                { name: '-unmute @user', value: 'Unmutes a user that was muted.' },
                { name: '-clear {1-100}', value: 'Clears 1 to 100 messages.' },
                { name: '-serverinfo', value: 'Gives information about a that  server.' },
                { name: '-ban @user', value: 'Bans a user from that server.' },
                { name: '-kick @user ', value: 'Kicks a user from that server.' },
                { name: '-rules ', value: 'Pre-made set of rules.' },
                { name: '-punishments', value: 'Pre-made set of punishments.' },
                { name: '-invite', value: 'To invite this bot to other servers' },
                { name: '-play "song name"', value: 'Join a voice channel, the bot will connect and play the song that was recommended.' },
                { name: '-leave', value: 'The bot will leave the voice channel and stop what was playing' },
                { name: '-slowmode {0-100}', value: 'The channel that command was used will have slowmode and the slowmode time will be set by the determinded amount given to the bot.' },
                {name:'-unban {UserID}' , value:'Unbans a user'},
                {name:'-setwelcome {message}' , value:'Set the servers welcome message. Can only use on mention (mentions is: <@>).'},
                {name:'-testjoin' , value:'Shows how the join message would look.'},
            )

        // {name:'' , value:''},

        message.channel.send(embed)

    }
}