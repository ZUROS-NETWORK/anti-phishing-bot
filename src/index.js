import { Client, GatewayIntentBits, Collection } from 'discord.js';
import fs from 'fs';
import dotenv from 'dotenv'
import { ready } from './events/ready';
import { runCommand } from './events/runCommands';
import { AutoMod } from './services/AutoMod';
dotenv.config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const config = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
};
client.config = config;


client.commands = new Collection();
const commandFolders = fs.readdirSync('./src/commands/');
for (const folder of commandFolders) {
  let props = require(`./commands/${folder}/index.js`);
  console.log(`[Loading command]: ${folder}`);
  client.commands.set(folder, props);
}

client.on('ready', async () => {
  ready(client);

})
client.on('messageCreate', async (message) => {
  runCommand(client, message)
  AutoMod(client, message)
})


client.login(client.config.token);

