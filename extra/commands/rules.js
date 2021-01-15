module.exports = {
    name: 'rules',
    description: "this is a rules command!",
    execute(message, args, Discord) {
        const { member, mentions } = message
        if (member.hasPermission('ADMINISTRATOR')) {
            const NewEmbed = new Discord.MessageEmbed()
                .setColor('#1ecbe1')
                .setTitle('Rules')
                .setDescription('Rules to the server')
                .addFields(
                    { name: 'Discord TOS', value: 'https://discordapp.com/terms' },
                    { name: '\u200B', value: '\u200b' },
                    { name: `1) Be respectful to anyone and everyone on the server`, value: `• No one deserves such treatment, including staff as well` },
                    { name: '2) Follow the discord Terms of Service. ', value: '•If we catch anyone breaking the TOS is a Kick or Ban' },
                    { name: '3) Any content that is NSFW is not allowed under any circumstances', value: '• If you must question on whether posting such content is allowed, don’t post it.' },
                    { name: '4) HUGE amounts spamming is not allowed.', value: '• This includes text channels, voice channels, and direct messages.' },
                    { name: '5) Dm anyone without a reason is not allowed', value: '• Includes sending malicious links or files that can steal information.' },
                    { name: '6) Swearing is allowed, but should be kept to a minimum.', value: '• You can’t use racist words, any type of slurs and anything that is clearly not appropriate language' },
                    { name: '7) Don’t ping without legitimate reasoning behind them', value: '• This includes pinging staff or members, if they are troll pings etc.' },
                    { name: '8) Alt accounts are not allowed to be use unrespectfully.', value: '• This is due to how they can be abused (Giveaways).' },
                    { name: '9) Catfishing or any sort of fake identities are forbidden', value: '• Imitating staff and being someone who you are isn’t allowed' },
                    { name: '10) Advertising isn\'t allowed anywhere ', value: '• These links is an instant mute/kick/ban whether it is DM or server' },
                    { name: '11) Raiding is not allowed', value: '• Instant ban for raiding whether voice chat or text' },
                    { name: '12) Content relation to suicide and death', value: '• Emoji combination, slang, speech, and all texts' },
                    { name: '13) Anything to target specific groups/individuals is prohibited', value: '• This includes antisemitism, Islamophobia, racism, etc' },
                    { name: '14) Use common sense always', value: '• Self explanatory' },
                    { name: '15) Discord names and avatars must be appropriate', value: '• No NSFW or suggestive content' },
                    { name: '16) Use the correct channel ', value: '• Self explanatory' },
                    { name: '17) Make sure to have fun', value: '\u200b' },


                    // {name:'' , value:''},
                )
                .setTimestamp()
                .setFooter('If someone is breaking a rule please Dm a staff member!')
            message.channel.send(NewEmbed)
        } 
        



    }
}