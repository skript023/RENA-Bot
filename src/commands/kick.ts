import { CommandInteraction, SlashCommandBuilder, GuildMember, CommandInteractionOptionResolver, User } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("kick")
  .setDescription("this is kick command").addStringOption(option => 
    option
      .setName("mention")
      .setDescription("The mention user to add role")
      .setRequired(true)
  );

export async function execute(interaction: CommandInteraction) 
{
	const opts = interaction.options as CommandInteractionOptionResolver;
	const user = opts.getUser('mention') as User;

	if (!interaction.guild) 
	{
		return interaction.reply('This command can only be used in a server.');
	}

	const target = await interaction.guild.members.fetch(user.id);
	
	const member = interaction.member as GuildMember;
	
	if (member && target) 
	{
		const admin = member.roles.cache.find(role => role.name === 'Administrator' || role.name === 'Master');

		if (admin)
		{
			const kickedUser = await target.kick('You have been kicked from server, reason: breaking server role');

			return interaction.reply(`${kickedUser.user.tag} have been kicked`);
		}

		return interaction.reply(`This command is set to admin ony`);
	} 
	
	return interaction.reply('Could not kick, user not found.');
}
