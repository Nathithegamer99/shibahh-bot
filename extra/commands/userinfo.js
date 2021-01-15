const { MessageEmbed } = require("discord.js");
const moment = require("moment")

module.exports = {
    name: 'userinfo',
    description: "Information about a user",
    async execute(message, args, Discord) {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }
        var member = user;


        const embeduserinfo = new MessageEmbed()
            .setColor("#1ecbe1")
            .setThumbnail(message.author.avatarURL)
            .addField(`${user.tag}`, `${user}`, true)
            .addField("ID:", `${user.id}`, true)
            .addField("Status:", `${user.presence.status}`, true)
            .addField("In Server", message.guild.name, true)
            .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
            .addField("Bot:", `${user.bot}`, true)

            .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
            .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
            message.channel.send(embeduserinfo)

    }

};