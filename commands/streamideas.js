module.exports = {
    name: 'streamideas',
    description: 'Asks viewers what they want to see',
    execute(client, message, args, user, channel, self) {
        client.say(channel, 'Hey you! Yes you! What games should I stream next?');
    }
}