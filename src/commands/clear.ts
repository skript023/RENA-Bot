import { CommandInteraction, SlashCommandBuilder, CommandInteractionOptionResolver, TextChannel } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName("clear")
	.setDescription("This is clear chat command")
	.addStringOption(option => 
		option
		.setName('count')
		.setDescription('Number of messages to delete')
		.setRequired(true)
  );

export async function execute(interaction: CommandInteraction) 
{
    const opts = interaction.options as CommandInteractionOptionResolver;
    const count = Number(opts.getString("count"));

	if (!count || count < 1 || count > 100) 
	{
		return interaction.reply('Pease provide a number between 1 and 100.');
	}

	const channel = interaction.channel as TextChannel; 

	if (channel)
	{
		const deleted = await channel.bulkDelete(count, true);
		
		return interaction.reply(`Successfully deleted ${deleted.size} messages.`);
	}

	return interaction.reply('This command can only be used in text channels.');
}
