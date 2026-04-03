const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'ping') {
            message.channel.send('Pong!');
        }
    }
});

client.login('YOUR_BOT_TOKEN');