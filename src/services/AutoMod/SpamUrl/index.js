import { Actions } from '../../Actions/index.js';

const userSpamData = new Map();

export const Spam = async (client, message, options) => {
    const regex = /(https?:\/\/[^\s]+)/g;
    const urls = message.content.match(regex);

    const now = Date.now();

    // Clear the map every certain interval of time
    userSpamData.forEach((userData, authorId) => {
        if (now - userData.timestamp > options.detection.cleanupInterval) {
            userSpamData.delete(authorId);
        }
    });

    if (message.content.includes('http://') || message.content.includes('https://')) {
        const authorId = message.author.id;
        const link = urls ? urls[0] : null;

        if (!userSpamData.has(authorId)) {
            userSpamData.set(authorId, { link, count: 1, timestamp: now });
        } else {
            const userData = userSpamData.get(authorId);

            if (userData.link === link && now - userData.timestamp < options.detection.minSecondsBetweenLinks) {
                userData.count++;

                if (userData.count >= options.detection.maxLinks) {
                    userSpamData.delete(authorId);
                    const userId = message.author.id
                    await Actions({ client, options, userId })

                }
            } else {
                userSpamData.set(authorId, { link, count: 1, timestamp: now });
            }
        }
    }
};
