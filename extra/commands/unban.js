const Discord = require('discord.js');
const ms = require('ms');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "unban",
    description: "unbans a user from the server",


    async execute(client, message, args, Discord) {


        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You do not have permission to use this command').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Please mention a userID you want to unban.').then(m => m.delete({ timeout: 5000 }));

        let member;
        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Not a valid user.').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'Unspecified';
        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));
        message.guild.fetchBans().then(bans => {
            const user = bans.find(ban => ban.user.id === member.id);
            if (user) {
                embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
                    .setColor('#00ff00')
                    .addField('User ID', user.user.id, true)
                    .addField('user Tag', user.user.tag, true)
                    .addField('Banned Reason', user.reason != null ? user.reason : 'Unspecified')
                    .addField('Unbanned Reason', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`User ${member.tag} isn't banned!`)
                    .setColor('#1ecbe1')
                message.channel.send(embed)
            }
        }).catch(e => {
            console.log(e)
            message.channel.send('An error has occurred!')
        });
    }

}