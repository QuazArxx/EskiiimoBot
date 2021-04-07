const tmi = require('tmi.js');
const channelName = 'eskiiimojo';
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
        username: 'EskiiimoBot',
        password: 'oauth:dpdpe4231b87i70rvfq7gtgbp3ag1e'
    },
    channels: [channelName],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(channelName, ', reporting for duty.')
});

client.on("subscription", function (channel, username, methods ) {
    client.say(channel, username + ' just subbed to the Eskiiimo fam!' )
});

client.on("resub", function (channel, username, months, message, userstate, methods) {
    let cumulativeMonths = userstate['msg-param-cumulative-months'];

    client.say(channel, username + " resubbed for " + cumulativeMonths + " months!" )
});

client.on('chat', (channel, user, message, self) => {
    if (self) return;

    if (message.toLowerCase() == 'f') {
        client.say(channel, 'F')
    }

    const args = message.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.execute(client, message, args, user, channel, self)
    } catch (err) {
        return;
    } 
})