const functions = require('../functions.js');

module.exports = {
    name: 'clearjail',
    description: 'Clears the list of people in the jail',
    execute(client, message, args, user, channel, self) {
        if (user.badges.moderator || user.badges.broadcaster) {
            functions.jail.length = 0;
            return client.say(channel, 'Jail cleared successfully.')
        } else return;
    }
}