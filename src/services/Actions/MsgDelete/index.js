
export const deleteAllMessages = async (client, userId, max) => {
    client.guilds.cache.forEach(async (guild) => {
        guild.channels.cache.forEach(async (channel) => {
            if (channel.type === 0) {
                try {
                    const messagesToDelete = await channel.messages.fetch({ limit: max });
                    const userMessages = messagesToDelete.filter((msg) => msg.author.id === userId);
                    userMessages.forEach(async (msg) => {
                        try {
                            await msg.delete();
                        } catch (error) {
                            console.error(`Error deleting message with ID ${msg.id}: ${error.message}`);
                        }
                    });
                } catch (error) {
                    console.error(`Error getting messages in channel ${channel.id}: ${error.message}`);
                }
            }
        });
    });
};
