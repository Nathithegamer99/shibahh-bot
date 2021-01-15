module.exports = {
    name: 'invite',
    description: "this is a invite command!",
    execute(message, args){
        message.channel.send('To invite this bot use this link: https://discord.com/oauth2/authorize?client_id=792805551180218409&scope=bot&permissions=2147483647!');
    }
}