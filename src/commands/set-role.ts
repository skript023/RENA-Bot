import { CommandInteraction, SlashCommandBuilder, GuildMember, CommandInteractionOptionResolver, User } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("set_role")
  .setDescription("this is set user role command").addStringOption(option => 
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
	
	const member = interaction.member as GuildMember;
	
	if (member && 'roles' in member) 
	{
		const admin = member.roles.cache.find(role => role.name === 'Administrator' || role.name === 'Master');

		if (admin)
		{
			const target = await interaction.guild.members.fetch(user?.id as string);
			const role = interaction.guild.roles.cache.find(r => r.name === "Member");
			
			if (role)
			{
				await target.roles.add(role?.id as string);

				return interaction.reply(`Role Member has added to: ${user?.displayName}`);
			}

			return interaction.reply(`Role not found`);
		}

		return interaction.reply(`This command is set to admin ony`);
	} 
	
	return interaction.reply('Could not give you a role.');
}
