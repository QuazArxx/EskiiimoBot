const functions = require('../functions.js');

module.exports = {
    name: 'hornyjail',
    descriptions: 'Sends someone to horny jail',
    execute(client, message, args, user, channel, self) {
        for (let x = 0; x < functions.jail.length; x++) {
            if (functions.jail[x] == user['display-name'].toLowerCase()) {
                functions.jail.splice(x, 1);
                client.say(channel, `${user['display-name']} broke out of horny jail!`);
            }
        }
    }
}