import { CommandInteraction, SlashCommandBuilder, GuildMember, CommandInteractionOptionResolver } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("get-role")
  .setDescription("this is auth command");

export async function execute(interaction: CommandInteraction) 
{
	const user = interaction.user;

	const channel = interaction.guild?.channels.cache.find(channel => channel.name === 'bot-room');

	if (!channel)
		return interaction.reply(`You cannot use this command in this channel`);

	if (!interaction.guild) 
	{
		return interaction.reply('This command can only be used in a server.');
	}
	
	const member = interaction.guild.members.cache.find(member => member.id === user.id);
	const role = interaction.guild.roles.cache.find(r => r.name === "Member");
	
	if (member && role)
	{
		member.roles.add(role.id);

		return interaction.reply(`Role Member has added to: ${user.displayName}`);
	}

	return interaction.reply('Could not give you a role, role not found or member not found.');
}
