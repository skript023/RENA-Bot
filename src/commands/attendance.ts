import { attendance } from '@/api/rena/attendance/attendance.rena';
import { roles } from '@/config/role';
import { CommandInteraction, SlashCommandBuilder, GuildMember } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("present")
  .setDescription("this is attandance command");

export async function execute(interaction: CommandInteraction) 
{
	const member = interaction.member as GuildMember;

	const channel = interaction.guild?.channels.cache.find(channel => channel.name === 'bot-room');

	if (!channel)
		return interaction.reply(`You cannot use this command in this channel`);

	if(!member.roles.cache.some(role => roles.includes(role.name)))
	{
		return interaction.reply('You dont have permission to access this command');
	} 
	else 
	{
		const response = await attendance.present();

		return interaction.reply('Attendant checked');
	}
}
