const functions = require('../functions.js');

module.exports = {
    name: 'riot',
    description: 'Chance to start a riot and break everyone out of horny jail',
    execute(client, message, args, user, channel, self) {
        let randomChance = Math.floor(Math.random() * 100)

        for (let x = 0; x < functions.jail.length; x++) {
            if (functions.jail[x] == user['display-name'].toLowerCase()) {
                if (randomChance < 50) {
                    return client.say(channel, `${user['display-name']} tried to start a riot and failed!`)
                } else {
                    functions.jail.length = 0;
                    return client.say(channel, `${user['display-name']} started a riot and broke everyone out of horny jail!`)
                }
            }
        }
        
        return client.say(channel, 'It\'s hard to start a riot from outside the jail.')
    }
}