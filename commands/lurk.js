module.exports = {
    name: 'lurk',
    description: 'Lets the user lurk',
    execute(client, message, args, user, channel, self) {
        client.say(channel, `${user['display-name']} is now lurking! Thanks for lurking on the Eskiiimo show`)
    }
}