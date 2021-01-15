module.exports = {
    name: 'punishments',
    description: "this is a punishments command!",
    execute(message, args, Discord) {
        const { member, mentions } = message
        if (member.hasPermission('ADMINISTRATOR')) {

            const NewEmbed = new Discord.MessageEmbed()
                .setColor('#1ecbe1')
                .setTitle('Punishments')
                .addFields(
                    { name: 'Rule breaking', value: 'When you break a rule, you will be punished.' },
                    { name: 'Can include from:', value: 'Bans, Kicks, Mutes, and Warns.' },
                    { name: '\u200B', value: '\u200b' },
                    { name: '3 warns', value: '10 minute mute.' },
                    { name: '5 warns', value: '1 hour mute.' },
                    { name: '10 warns', value: '1 day mute.' },
                    { name: '15 warns', value: '1 week mute.' },
                    { name: '20 warns', value: 'Kick from the server.' },
                    { name: '25 warns', value: 'Ban from the server' },
                )


            message.channel.send(NewEmbed)
        } 
        

    }
}