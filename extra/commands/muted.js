const ms = require('ms');
const { MessageEmbed } = require("discord.js");
const userID = "509220327398703119"
module.exports = {
    name: 'muted',
    description: "This mutes a member",
    async execute(client, message, args) {
        const { member, mentions } = message
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
                "You do not have permission to use this command."
            );
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission to manage roles.");
        }
        const user = message.mentions.members.first();

        if (!user) {
            return message.channel.send(
                "Please mention a user you want to mute."
            );
        }

        if (!args[1])
            return message.channel.send('Please enter a length of time of 14 days or less (1s/m/h/d)');
        let time = ms(args[1]);
        if (!time || time > 1209600000) // Cap at 14 days, larger than 24.8 days causes integer overflow
            return message.channel.send('Please enter a length of time of 14 days or less (1s/m/h/d)');

        let reason = args.slice(2).join(' ');
        if (!reason) reason = '`Unspecified`';
        if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

        let muterole = message.guild.roles.cache.find(x => x.name === "muted")


        if (!muterole) {

            message.guild.roles.create({
                data: {
                    name: "muted",
                    permissions: [],
                    color: "GRAY"
                },

                reason: "Created the mute role."
            })


            return message.channel.send("This server did not have role: `muted`. Please  redo the command!")
        }
        message.guild.channels.cache.each((channel) => {
            channel.updateOverwrite(muterole, {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: false,
                READ_MESSAGE_HISTORY: true,
                TALK: false
            });
        });
        if (member.roles.cache.has(muterole)) {
            return message.channel.send("The user is already muted")
        }
        

        try {
            await user.roles.add(muterole);
          } catch (err) {
            console.log(err)
            return message.channel.send('User was not muted', err.message);
          }
        const muteEmbed = new MessageEmbed()
            .setTitle('Mute Member')
            .setDescription(`${user} has now been muted for **${ms(time, { long: true })}**.`)
            .addField('Moderator', message.member, true)
            .addField('Member', user, true)
            .addField('Time', `\`${ms(time)}\``, true)
            .addField('Reason', reason)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('#1ecbe1')
        message.channel.send(muteEmbed);
        
        user.send(`You are muted in **${message.guild.name}** For \`${reason}\`.`)
        // Unmute member
        member.timeout = message.client.setTimeout(async () => {
            try {
                await member.roles.remove(muterole);
                const unmuteEmbed = new MessageEmbed()
                    .setTitle('Unmute Member')
                    .setDescription(`${user} has been unmuted.`)
                    .setTimestamp()
                    .setColor('#1ecbe1');
                message.channel.send(unmuteEmbed);
            } catch (err) {
                console.log(err)
                return message.channel.send('User was not unmuted', err.message);
            }
        }, time);


    }



}