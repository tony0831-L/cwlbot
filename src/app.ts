
import { Client, GatewayIntentBits, Interaction } from 'discord.js';
import { onInteraction } from './utils/onInteraction';
import { onReady } from './utils/onReady';
require('dotenv').config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready',  async () => {
    await onReady(client)
});

client.on('interactionCreate', async (interaction:Interaction)=>{
    await onInteraction(interaction)
});

client.login(process.env.token);