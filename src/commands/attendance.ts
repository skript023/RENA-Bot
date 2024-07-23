import { attendance } from '@/api/rena/attendance/attendance.rena';
import { CommandInteraction, SlashCommandBuilder, GuildMember } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("present")
  .setDescription("this is attandance command");

export async function execute(interaction: CommandInteraction) 
{
	const member = interaction.member as GuildMember;

	if(!member.roles.cache.some(r => r.name === 'Master'))
	{
		return interaction.reply('You dont have permission to access this command');
	} 
	else 
	{
		const response = await attendance.present();

		return interaction.reply(response.message);
	}
}
