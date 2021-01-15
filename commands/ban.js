const { execute } = require("./muted");
const ms = require('ms');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'ban',
    description: "This ban a member",
     execute(client, message, args) {
       const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to use this command.")
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
        if (!User) return message.channel.send("Please mention a user you want to ban")
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("Can't that user")
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "Unspecified"
        }
        User.ban({reason: banReason})
        var UserID = User.id
        

        const banembed = new MessageEmbed()
            .setTitle('Member Banned')
            .setThumbnail(member.user.displayAvatarURL())
            .addField('User Banned', member)
            .addField('Banned by', message.author)
           .addField('Reason', banReason)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('#1ecbe1')

        message.channel.send(banembed);
        member.send(`You are Banned from **${message.guild.name}** For \`${banReason}\`. Appeal here: https://forms.gle/EtHUhgjFzRck8ojy5 `)
        
    }
}




// Appeal here: https://forms.gle/EtHUhgjFzRck8ojy5