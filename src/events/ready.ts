import { Client } from 'discord.js';
import { deployCommands } from '@/deploy.command';
import { config } from '@/config/config';

export const event = {
	name: "ready",
	type: "once",
	execute: (client: Client) => {
		console.log("Discord bot is ready! 🤖");

		const channel = client.channels.cache.get('349824328520695818') as any;

		deployCommands({ guildId: config.DISCORD_HELL_GATE_GUILD_ID as string });
		
		if (channel) 
		{
			channel.send('I am ready! 🤖');
		} 
		else 
		{
			console.error('Channel not found. Ensure the bot has access to the specified channel.');
		}
	}
}
