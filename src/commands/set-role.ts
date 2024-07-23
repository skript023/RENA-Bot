import { CommandInteraction, SlashCommandBuilder, GuildMember, CommandInteractionOptionResolver, User, Role } from 'discord.js';
import signale from 'signale';

export const data = new SlashCommandBuilder()
	.setName("set-role")
	.setDescription("this is set user role command")
	.addUserOption(option => 
		option
		.setName("user")
		.setDescription("The mention user to add role")
		.setRequired(true))
	.addRoleOption(option => 
	option
		.setName("role")
		.setDescription("The mention user to add role")
		.setRequired(true)
	);

export async function execute(interaction: CommandInteraction) 
{
	const opts = interaction.options as CommandInteractionOptionResolver;
	const user = opts.getUser('user') as User;
	const role = opts.getRole('role') as Role;

	signale.await(`set role ${role.name} to ${user.displayName}`);

	if (!interaction.guild) 
	{
		return interaction.reply('This command can only be used in a server.');
	}
	
	const member = interaction.member as GuildMember;
	
	if (member && 'roles' in member) 
	{
		if (member.roles.cache.some(role => role.name === 'Administrator' || role.name === 'Master'))
		{
			const target = await interaction.guild.members.fetch(user.id);
			
			if (role)
			{
				await target.roles.add(role.id);

				signale.success(`set role ${role.name} to ${user.displayName}`);

				return interaction.reply(`Role ${role.name} has added to: ${user.displayName}`);
			}

			return interaction.reply(`Role not found`);
		}

		return interaction.reply(`This command is set to admin ony`);
	} 
	
	return interaction.reply('Could not give you a role.');
}
