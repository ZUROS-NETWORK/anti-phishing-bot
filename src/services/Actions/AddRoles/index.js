export const addRole = async (client, userId, roleId) => {
    try {
        const guild = client.guilds.cache.get(client.config.serverId)
        const member = await guild.members.fetch(userId);
        const role = await guild.roles.fetch(roleId);
        await member.roles.add(role);
    } catch (error) {
        console.error(`Error adding role: ${error.message}`);
    }
};


