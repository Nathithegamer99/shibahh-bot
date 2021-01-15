const userID = "509220327398703119"

module.exports = {
    name: 'servers',
    description: "shows the servers the bot is in",
    execute(message, args, client) {
        client.guilds.cache.forEach((guild) => {
            if (message.author.id === userID) {
                message.channel.send(
                    `${guild.name} has a total of ${guild.memberCount} members`
                )
            } 
        })











    }
}

