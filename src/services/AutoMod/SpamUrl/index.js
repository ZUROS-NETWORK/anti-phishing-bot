import { Actions } from '../../Actions/index.js';
import fs from 'fs';

const userSpamDataFile = 'userSpamData.json';

// Check if the userSpamData file exists, if not, create it
if (!fs.existsSync(userSpamDataFile)) {
    fs.writeFileSync(userSpamDataFile, '{}');
}

export const Spam = async (client, message, options) => {
    const regex = /(https?:\/\/[^\s]+)/g;
    const urls = message.content.match(regex);

    const now = Date.now();
    let userSpamData = JSON.parse(fs.readFileSync(userSpamDataFile, 'utf8'));

    if (message.content.includes('http://') || message.content.includes('https://')) {
        const authorId = message.author.id;
        const link = urls ? urls[0] : null;
        if (!userSpamData[authorId]) {
            
            userSpamData[authorId] = { link, count: 1, timestamp: now };

            console.log(userSpamData[authorId])
            console.log((now - userSpamData[authorId].timestamp) / 1000)

        } else {
            console.log(Math.floor((now - userSpamData[authorId].timestamp) / 1000))
               if (Math.floor((now - userSpamData[authorId].timestamp) / 1000) <= options.detection.minSecondsBetweenLinks) {
                userSpamData[authorId].count++;
                console.log((now - userSpamData[authorId].timestamp) / 1000)
                if (userSpamData[authorId].count >= options.detection.maxLinks) {
                    delete userSpamData[authorId];
                    const userId = message.author.id;
                    await Actions({ client, options, userId });
                }
            } else {
                userSpamData[authorId] = { link, count: 1, timestamp: now };
            }
        }
    }

    // Write the updated userSpamData back to the json file
    fs.writeFileSync(userSpamDataFile, JSON.stringify(userSpamData));
};