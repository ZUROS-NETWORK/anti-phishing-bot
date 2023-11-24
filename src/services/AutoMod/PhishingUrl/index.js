import stopPhishing from 'stop-discord-phishing';
export const PhishingUrl = async (client, message) => {
    async function checkMessage(message) {
        const isGrabber = await stopPhishing.checkMessage(message, true);
        return isGrabber;
    }
    if (await checkMessage(message.content)) {
        console.log(`A Phishing link was detected!! ${message.content}`);
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
}