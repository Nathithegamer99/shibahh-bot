const ms = require('ms');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'kick',
    description: "This kick a member",
    execute(client, message, args) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to use this command.")
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
        if (!User) return message.channel.send("Please mention a user you want to kick")
        if (User.hasPermission("KICK_MEMBERS")) return message.reply("Can't that user")
        let kickReason = args.join(" ").slice(22);
        if (!kickReason) {
            kickReason = "Unspecified"
        }
        User.kick({ reason: kickReason })
        var UserID = User.id


        const banembed = new MessageEmbed()
            .setTitle('Member Kicked')
            .setThumbnail(member.user.displayAvatarURL())
            .addField('User Kicked', member)
            .addField('Kicked by', message.author)
            .addField('Reason', kickReason)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('#1ecbe1')

        message.channel.send(banembed);
        member.send(`You are Kicked from **${message.guild.name}** For \`${kickReason}\`.`)

    }
}
//module.exports = {
//    name: 'kick',
//    description: "This kick a member",
//    execute(message, args) {
//    }
//}