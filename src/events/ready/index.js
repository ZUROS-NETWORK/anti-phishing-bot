export const ready = async (client) => {
    let totalUsers = client.guilds.cache.reduce((users, value) => users + value.memberCount, 0);
    let totalGuilds = client.guilds.cache.size
    let totalChannels = client.channels.cache.size


    client.user.setPresence({ activity: { name: `MC.ZUROS.XYZ 👈 EL MEJOR SERVIDOR DE MINECRAFT`, type: "PLAYING" }, status: "online" });
    console.log("[Bot iniciado correctamente]: " + client.user.tag);
}