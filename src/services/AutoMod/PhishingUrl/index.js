import stopPhishing from 'stop-discord-phishing';
import { Actions } from '../../Actions/index.js';
export const PhishingUrl = async (client, message, options) => {
    async function checkMessage(message) {
        const isGrabber = await stopPhishing.checkMessage(message, true);
        return isGrabber;
    }
    if (await checkMessage(message.content)) {
        console.log(`A Phishing link was detected!! ${message.content}`);
        message.delete().catch((error) => {
            console.error('Error deleting message:', error);
        });
        const userId = message.author.id
        await Actions({ client, options, userId })
    }
}