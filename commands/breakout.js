module.exports = {
    name: 'hornyjail',
    descriptions: 'Sends someone to horny jail',
    execute(client, message, args, user, channel, self) {
        client.say(channel, `${user['display-name']} broke out of horny jail!`);
    }
}