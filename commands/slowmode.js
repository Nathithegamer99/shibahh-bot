module.exports = {
    name: 'slowmode',
    description: "This creates slowmode",
    execute(message, args) {
        const { channel, member } = message
        if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('MANAGE_CHANNELS')
        ) {
            const messageArray = message.content.split(' ');
            const args = messageArray.slice(1);

            message.channel.setRateLimitPerUser(args[0])
            message.channel.send(`Slowmode is now: ${args[0]}s`)
        } else {
            message.channel.send(`<@${member.id}> You do not have permission to use this command.`)
        }
    }
}