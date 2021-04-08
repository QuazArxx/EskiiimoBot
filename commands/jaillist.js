const functions = require('../functions.js');

modules.exports = {
    name: 'jaillist',
    description: 'Lists everyone in horny jail',
    execute(client, message, args, user, channel, self) {
        if (functions.jail.length == 0) return client.say(channel, 'There\'s nobody in horny jail.')
        
        let list = '';
        for (let x = 0; x < functions.jail.length; x++) {
            list += `${functions.jail[x]}\n`
        }
        
        client.say(channel, `${list}`);
    }
}