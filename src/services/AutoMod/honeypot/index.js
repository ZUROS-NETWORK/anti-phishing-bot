export const Honeypot = async (client, message) => {

    if (message.channel.id === '950652869185511455') {


        const member = message.guild.members.cache.get(message.author.id);
        await member.roles.remove(Array.from(member.roles.cache.keys()))
            .catch(error => console.error('Error deleting roles:', error));
        const blacklistRole = message.guild.roles.cache.get('1081735652934164571');
        await member.roles.add(blacklistRole)
            .catch((error) => {
                console.error('Error adding balacklist role:', error);
            });

    }

}