module.exports = {
    name: 'twitter',
    description: 'Shows Eskiii\'s Twitter',
    execute(client, message, args, tags, user, channel, self) {
        client.say(channel, 'Eskiii\'s Twitter: https://twitter.com/EskiiimoJo');
    }
}