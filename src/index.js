import { Client, GatewayIntentBits, Collection } from 'discord.js';

import fs from 'fs';
import dotenv from 'dotenv'
import { ready } from './events/ready';
import { runCommand } from './events/runCommands';
import { AutoMod } from './services/AutoMod';
import { configFile } from './config';
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
  honeypotChannelId: process.env.HONEYPOT_CHANNEL_ID,
  blackListRoleId: process.env.BLACKLIST_ROLE_ID,
  adminRoleId: process.env.ADMIN_ROLE_ID,
  verifiedRoleId: process.env.VERIFIED_ROLE_ID,
  sanctionNoticeChannelId: process.env.SANCTION_NOTICE_CHANNEL_ID,
  serverId: process.env.SERVER_ID
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

