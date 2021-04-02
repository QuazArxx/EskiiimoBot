const tmi = require('tmi.js');
const channelName = 'quazarxx';
const prefix = '!';

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'QuazoBot',
        password: 'oauth:es1vysj7z1np4vabf92a7yurm8mn5k'
    },
    channels: [channelName],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(channelName, 'reporting for duty.')
});

client.on('chat', (channel, user, message, self) => {
    if (self) return;

    const args = message.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.execute(client, message, args, user, channel, self)
    } catch (err) {
        return;
    } 
})