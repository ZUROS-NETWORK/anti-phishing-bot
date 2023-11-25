export const removeRoles = async (client, userId) => {
    try {
        const guild = client.guilds.cache.get(client.config.serverId)
        const member = await guild.members.fetch(userId);
        await member.roles.remove(Array.from(member.roles.cache.keys()));
    } catch (error) {
        console.error(`Error deleting member roles: ${error.message}`);
    }
};