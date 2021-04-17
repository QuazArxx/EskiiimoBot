const functions = require('../functions.js');

module.exports = {
    name: 'hornyjail',
    descriptions: 'Sends someone to horny jail',
    execute(client, message, args, user, channel, self) {
        let param = message.split(' ').filter(n => n);

        if (param[1] == 'eskiiimobot') return client.say(channel, 'You can\'t jail the jailer!');

        if (param[1] == 'all') {
            return client.say(channel, `${user['display-name']} decided that everyone needs to be in horny jail!`);
        } else if (param[1].startsWith('@')) {
            functions.jail.push(param[1].substring(1).toLowerCase())
            client.say(channel, `${user['display-name']} sent ${param[1].substring(1)} to horny jail.`);
            setTimeout(function() {
                return client.say(channel, `${param[1].substring(1)}, you are now in horny jail. Use !breakout to escape.`)
            }, 3000);
        } else {
            functions.jail.push(param[1].toLowerCase())
            client.say(channel, `${user['display-name']} sent ${param[1]} to horny jail.`);
            setTimeout(function() {
                return client.say(channel, `${param[1]}, you are now in horny jail. Use !breakout to escape.`)
            }, 3000);
        }
    }
}