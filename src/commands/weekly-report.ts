import { attendance } from '@/api/rena/attendance/attendance.rena';
import { CommandInteraction, SlashCommandBuilder, GuildMember, CommandInteractionOptionResolver } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("weeklyReportCheck")
  .setDescription("this is weekly report command")
  .addStringOption(option => 
    option
      .setName("date")
      .setDescription("The message to include in the reply")
      .setRequired(false)
  );

export async function execute(interaction: CommandInteraction) 
{
	const opts = interaction.options as CommandInteractionOptionResolver;
	const date = opts.getString("date");

	const match = date?.match(/start:\s*(\d+)\s*end:\s*(\d+)/);

	const start = match ? match[1] : undefined;
    const end = match ? match[2] : undefined;

	const member = interaction.member as GuildMember;
    const role = member.roles.cache.find(r => r.name === 'Master');

	if(!role)
	{
		return interaction.reply('You dont have permission to access this command');
	} 
	else 
	{
		const response = await attendance.weeklyReport(start, end);

		return interaction.reply(response.message);
	}
}
