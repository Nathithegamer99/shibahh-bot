const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment')

const config = require('./config.json')
const command = require('./command')
const mongo = require('./mongo')
const welcome = require('./welcome')


const prefix = '-';

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', async () => {
    console.log('Shibahhh is online!');

    await mongo().then(mongoose => {
        try {
            console.log('Connected to Mongo!')
        } finally {
            mongoose.connection.close()
        }
    })

    welcome(client)

    client.user.setPresence({
        activity: {
            name: '-help',
            type: "WATCHING"
        },
        status: 'online'

    })
        .catch(console.error);







    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'ping') {
            client.commands.get('ping').execute(message, args, client);
        } else if (command === 'mute') {
            client.commands.get('muted').execute(client, message, args);
        } else if (command === 'unmute') {
            client.commands.get('unmute').execute(message, args);
        } else if (command === 'clear') {
            client.commands.get('clear').execute(message, args);
        } else if (command === 'rules') {
            client.commands.get('rules').execute(message, args, Discord);
        } else if (command === 'punishments') {
            client.commands.get('punishments').execute(message, args, Discord);
        } else if (command === 'help') {
            client.commands.get('help').execute(message, args, Discord);
        } else if (command === 'invite') {
            client.commands.get('invite').execute(message, args);
        } else if (command === 'play') {
            client.commands.get('play').execute(message, args);
        } else if (command === 'leave') {
            client.commands.get('leave').execute(message, args);
        } else if (command === 'kick') {
            client.commands.get('kick').execute(client, message, args);
        } else if (command === 'ban') {
            client.commands.get('ban').execute(client, message, args);
        } else if (command === 'warn') {
            client.commands.get('warn').execute(message, args, client);
        } else if (command === 'slowmode') {
            client.commands.get('slowmode').execute(message, args);
        } else if (command === 'servers') {
            client.commands.get('servers').execute(message, args, client);
        } else if (command === 'serverinfo') {
            client.commands.get('serverinfo').execute(message, args, Discord);
        } else if (command === 'userinfo') {
            client.commands.get('userinfo').execute(message, args, Discord);
        } else if (command === 'unban') {
            client.commands.get('unban').execute(client, message, args, Discord);
        }

    });




})

client.login(config.token)