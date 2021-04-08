const functions = require('../functions.js');

module.exports = {
    name: 'hornyjail',
    descriptions: 'Sends someone to horny jail',
    execute(client, message, args, user, channel, self) {
        if (functions.jail.length == 0) return;

        for (let x = 0; x < functions.jail.length; x++) {
            if (functions.jail[x] == user['display-name'].toLowerCase()) {
                functions.jail.splice(x, 1);
                return client.say(channel, `${user['display-name']} broke out of horny jail!`);
            }
        }
    }
}