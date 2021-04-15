//const { prefix } = require('../config.json');

module.exports = {
    name: 'commands',
    description: 'Displays list of commands',
    execute(client, message, args, user, channel, self) {
        const data = [];
        const { commands } = message.client;
        
        data.push(commands.map(command => command.name).join(', '));
        client.say(channel, `${data, { split: true }}`);
    }
}