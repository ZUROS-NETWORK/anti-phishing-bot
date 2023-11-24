const userSpamData = new Map();

export const SpamUrl = async (client, message) => {
    const regex = /(https?:\/\/[^\s]+)/g;
    const urls = message.content.match(regex);

    const now = Date.now();
    const cleanupInterval = 5000;

    // Clear the map every certain interval of time
    userSpamData.forEach((userData, authorId) => {
        if (now - userData.timestamp > cleanupInterval) {
            userSpamData.delete(authorId);
        }
    });

    if (message.author.bot || message.channel.id === '950652869185511455') return;

    if (message.content.includes('http://') || message.content.includes('https://')) {
        const authorId = message.author.id;
        const link = urls ? urls[0] : null;

        if (!userSpamData.has(authorId)) {
            userSpamData.set(authorId, { link, count: 1, timestamp: now, messages: [message.id] });
        } else {
            const userData = userSpamData.get(authorId);

            if (userData.link === link && now - userData.timestamp < 4000) {
                userData.count++;

                if (userData.count > 3) {
                    for (const messageId of userData.messages) {
                        try {
                            const deletedMessage = await message.channel.messages.fetch(messageId);
                            if (deletedMessage) {
                                await deletedMessage.delete();
                            }
                        } catch (error) {
                            console.error(`Error al eliminar mensaje con ID ${messageId}: ${error.message}`);
                        }
                    }
                    // Clear user data after deleting messages
                    userSpamData.delete(authorId);
                    const member = message.guild.members.cache.get(message.author.id);
                    await member.roles.remove(Array.from(member.roles.cache.keys()))
                        .catch(error => console.error('Error deleting roles:', error));
                } else {
                    // Add the message ID to the user's message array
                    userData.messages.push(message.id);
                }
            } else {
                userSpamData.set(authorId, { link, count: 1, timestamp: now, messages: [message.id] });
            }
        }
    }
};
