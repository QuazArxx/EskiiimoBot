module.exports = {
    name: 'so',
    description: 'Does a shoutout for the mentioned person',
    execute(client, message, args, tags, user, channel, self) {
        let param = message.split(' ').filter(n => n);
        let isBroadcaster = channel.replace('#', '') == user.username;

        if(!(user.mod) || !(user['user-type']) === 'mod' || !isBroadcaster) return;
        if (!param[1]) return;

        client.say(channel, `Make sure to give ${param[1]} a follow! Give ${param[1]} a follow at https://twitch.tv/${param[1]}`)
    }
}