module.exports = {
    name: 'clear',
    description: "Clear messages!",

    async execute(message, args) {

        const { channel, member } = message
        if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('MANAGE_MESSAGES')
        ) {




            if (!args[0]) return message.reply("Please enter the amount of messages to clear!");

            if (isNaN(args[0])) return message.reply("Please type a real number!");

            if (args[0] > 100) return message.reply("You can't remove more than 100 messages!");

            if (args[0] < 1) return message.reply("You have to delete at least one message!");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages)
            });

        } else {
            message.channel.send(`<@${member.id}> You don't have permission to use this command.`)
        }
    }
}   