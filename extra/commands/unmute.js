module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    async execute(message, args) {

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
                "You do not have permission to use this command. "
            );
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission: manage roles.");
        }
        const user = message.mentions.members.first();

        if (!user) {
            return message.channel.send(
                "Please mention a user you want to unmute."
            );
        }
        let muterole = message.guild.roles.cache.find(x => x.name === "muted")


        if (user.roles.cache.has(muterole)) {
            return message.channel.send("The user does not have the muted role.")
        }
        user.roles.remove(muterole)

        await message.channel.send(`**${message.mentions.users.first().username}** is now unmuted`)

        user.send(`You are now unmuted from **${message.guild.name}**`)

    }
}
