import fs from 'fs';
import { configFile } from '../../../config.js';
import { Actions } from '../../Actions/index.js';
export const DiscordUrl = async (client, message, options) => {
    const regex = /(https?:\/\/[^\s]+)/g;
    const urls = message.content.match(regex);
    const userId = message.author.id

    if (message.content.includes('discord.gg') || message.content.includes('discord.com/invite')) {
        //const whitelistData = fs.readFile('./../../../whitelist.json');
        //const whitelistJson = JSON.parse(whitelistData);

        for (const url of urls) {
            try {
                const invite = await client.fetchInvite(url);
                const findServer = configFile.whitelist.find(server => server.id === invite.guild.id);

                if (!findServer || message.guild.id !== invite.guild.id) {
                    console.log(`An illegal server was detected! ${url}`);
                    message.delete().catch((error) => {
                        console.error('Error deleting message:', error);
                    });
                    Actions({ client, options, userId })
                }
            } catch (error) {
                console.error(`Error getting invitation information for ${url}:`, error.message);
            }

        }
    }

}