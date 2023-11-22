import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = '';

client.on('messageCreate', (message) => {
  // Verifica si el mensaje contiene un enlace de discord.gg o discord.com/invite
  if (message.content.includes('discord.gg') || message.content.includes('discord.com/invite')) {
    // Borra el mensaje
    message.delete().catch((error) => {
      console.error('Error al intentar borrar el mensaje:', error);
    });
  }
});
client.login(TOKEN);

