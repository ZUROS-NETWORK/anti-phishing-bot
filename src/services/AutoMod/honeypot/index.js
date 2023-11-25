import { Actions } from '../../Actions/index.js';
export const Honeypot = async (client, message, options) => {

    if (message.channel.id === client.config.honeypotChannelId) {
        const userId = message.author.id
        await Actions({ client, options, userId })
    }

}