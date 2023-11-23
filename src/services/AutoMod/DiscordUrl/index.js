import fs from 'fs';
import { whitelist } from '../../../config.js';
export const DiscordUrl = async (client, message) => {
    const regex = /(https?:\/\/[^\s]+)/g;
    const urls = message.content.match(regex);

    if (message.content.includes('discord.gg') || message.content.includes('discord.com/invite')) {
        //const whitelistData = fs.readFile('./../../../whitelist.json');
        //const whitelistJson = JSON.parse(whitelistData);

        for (const url of urls) {
            try {
                const invite = await client.fetchInvite(url);
                const findServer = whitelist.find(server => server.id === invite.guild.id);

                if (!findServer || message.guild.id !== invite.guild.id) {
                    console.log(`An illegal server was detected! ${url}`);
                    message.delete().catch((error) => {
                        console.error('Error deleting message:', error);
                    });
                    const member = message.guild.members.cache.get(message.author.id);
                    await member.roles.remove(Array.from(member.roles.cache.keys()))
                        .catch(error => console.error('Error deleting roles:', error));
                    const blacklistRole = message.guild.roles.cache.get('1081735652934164571');
                    await member.roles.add(blacklistRole)
                        .catch((error) => {
                            console.error('Error adding role:', error);
                        });

                }
            } catch (error) {
                console.error(`Error getting invitation information for ${url}:`, error.message);
            }

        }
    }

}