module.exports = {
    name: 'hi',
    description: 'Says hi back',
    execute(client, message, args, tags, user, channel, self) {
        client.say(channel, `Hiya, ${user.username}!`);
    },
};