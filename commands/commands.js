//const { prefix } = require('../config.json');

module.exports = {
    name: 'sneak',
    description: 'Displays Sneak energy link',
    execute(client, message, args, user, channel, self) {
        const data = [];
        const { commands } = tmi.client;
        
        data.push(commands.map(command => command.name).join(', '));
        client.say(channel, `${data, { split: true }}`);
    }
}