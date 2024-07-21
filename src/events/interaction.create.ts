import { Interaction, CacheType } from 'discord.js';
import { commands } from "@/commands";

export const event = {
	name: "interactionCreate",
	type: "on",
	execute: (interaction: Interaction<CacheType>) => {
		if (!interaction.isCommand()) 
		{
			return;
		}
	
		const { commandName } = interaction;
	
		if (commands[commandName as keyof typeof commands]) 
		{
			commands[commandName as keyof typeof commands].execute(interaction);
		}
	}
}
