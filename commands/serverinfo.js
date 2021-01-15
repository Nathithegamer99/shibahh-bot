
module.exports = {
        name: 'serverinfo',
       description: "shows the info for server",
    execute(message, args, Discord) {
        const { guild } = message


        const { name, region, memberCount, owner, afkTimeout, verificationLevel, premiumSubscriptionCount } = guild
        const icon = guild.iconURL()
        
        const embed = new Discord.MessageEmbed()
            .setColor('#1ecbe1')
            .setTitle(`Server Info for "${name}"`)
            .setThumbnail(icon)
            .addFields(
                {
                    name: 'Region',
                    value: region,
                },
                {
                    name: 'Members',
                    value: memberCount,
                },
                {
                    name: 'Owner',
                    value: owner,
                },
                {
                    name: 'AFK Timeout',
                    value: afkTimeout / 60,
                },
                {
                    name: 'Verification Level',
                    value: verificationLevel,
                },
                {
                    name: 'Boosts',
                    value: premiumSubscriptionCount,
                }

                
            )
            .addField("Server ID", message.guild.id, true)
            .setThumbnail(message.guild.iconURL())

        message.channel.send(embed)
    }
}