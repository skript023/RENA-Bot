import { CommandInteraction, SlashCommandBuilder, GuildMember, CommandInteractionOptionResolver, User } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("ban")
  .setDescription("this is ban command")
  .addUserOption(option => 
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
			const bannedUser = await target.ban({ 
				reason: 'You have been banned from server, reason: breaking server role',
				deleteMessageSeconds: 120
			});

			return interaction.reply(`${bannedUser.user.tag} have been banned`);
		}

		return interaction.reply(`This command is set to admin ony`);
	} 
	
	return interaction.reply('Could not ban, user not found.');
}
