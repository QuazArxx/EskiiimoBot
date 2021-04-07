module.exports = {
    name: 'so',
    description: 'Does a shoutout for the mentioned person',
    execute(client, message, args, user, channel, self) {
        let param = message.split(' ').filter(n => n);
        if (!param[1]) return;

        if(user.badges.moderator || user.badges.broadcaster) {
            return client.say(channel, `Make sure to give ${param[1]} a follow! Give ${param[1]} a follow at https://twitch.tv/${param[1]}`)
        } else return;   
    }
}