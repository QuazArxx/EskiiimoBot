const functions = require('../functions.js');

module.exports = {
    name: 'hornyjail',
    descriptions: 'Sends someone to horny jail',
    execute(client, message, args, user, channel, self) {
        let param = message.split(' ').filter(n => n);

        if(param[1] == 'all') {
            return client.say(channel, `${user['display-name']} decided that everyone needs to be in horny jail!`);
        } else {
            functions.jail.push(param[1])
            client.say(channel, `${user['display-name']} sent ${param[1]} to horny jail.`);
        }
    }
}