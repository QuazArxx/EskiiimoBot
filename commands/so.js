module.exports = {
    name: 'so',
    description: 'Does a shoutout for the mentioned person',
    execute(client, message, args, tags, user, channel, self) {
        let param = message.split(' ').filter(n => n);
        const badges = tags.badges || {};
        const isBroadcaster = badges.broadcaster;
        const isMod = badges.moderator;
        const isModUp = isMod || isBroadcaster;

        if(!isModUp) return;
        if (!param[1]) return;

        client.say(channel, `Make sure to give ${param[1]} a follow! Give ${param[1]} a follow at https://twitch.tv/${param[1]}`)
    }
}