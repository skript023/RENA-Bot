import { config } from '@/config/config';
import { Client } from 'discord.js';
import { events } from './events';

export default class event
{
	static init(client: Client)
	{
		const eventsData = Object.values(events).map((command) => command.event);
		
		for (const event of eventsData)
		{
			switch (event.type) {
				case 'once':
					client.once(event.name, event.execute);
				break;
				case 'on':
					client.on(event.name, event.execute);
				break;
			}
		}

		client.login(config.DISCORD_TOKEN);
	}
}
