import { ActivityType, Client } from 'discord.js';
import { deployCommands } from '@/deploy.command';
import { config } from '@/config/config';
import signale from 'signale';

export const event = {
	name: "ready",
	type: "once",
	execute: (client: Client) => {
		signale.start("Discord bot is ready! 🤖");

		client.user?.setActivity({
			name: 'Writing a typescript',
			state: 'Idle',
			type: ActivityType.Playing
		});

		const channel = client.channels.cache.get('349824328520695818') as any;

		deployCommands({ guildId: config.DISCORD_HELL_GATE_GUILD_ID as string });
		
		// if (channel) 
		// {
		// 	channel.send('I am ready! 🤖');
		// } 
		// else 
		// {
		// 	signale.error('Channel not found. Ensure the bot has access to the specified channel.');
		// }
	}
}
