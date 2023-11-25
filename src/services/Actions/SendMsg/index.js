export const sendMessage = async (client, channelId, content) => {
    try {
        const channel = await client.channels.cache.get(channelId);
        await channel.send(content);
    } catch (error) {
        console.error(`Error sending message to channel ${channelId}: ${error.message}`);
    }
};