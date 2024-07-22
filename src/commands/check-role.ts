import { CommandInteraction, SlashCommandBuilder, GuildMember } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("checkRole")
  .setDescription("this is auth command");

export async function execute(interaction: CommandInteraction) 
{
	if (!interaction.guild) 
	{
		return interaction.reply('This command can only be used in a server.');
	}
	
	const member = interaction.member as GuildMember;
	
	if (member && 'roles' in member) 
	{
		const roles = member.roles;
		const roleNames = roles.cache.map(role => role.name).join(', ');
	
		return interaction.reply(`Your roles: ${roleNames}`);
	} 
	else
	{
		return interaction.reply('Could not retrieve your roles.');
	}
}
