import { CommandInteraction, SlashCommandBuilder, GuildMember, CommandInteractionOptionResolver, User, Role } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("remove-role")
  .setDescription("this is auth command")
  .addUserOption(option => 
	option.
	setName('user')
	.setDescription('Select user to remove the role from')
  ).addRoleOption(option => 
	option
	.setName('role')
	.setDescription('Select role which want to be removed from user')
  );

export async function execute(interaction: CommandInteraction) 
{
	const member = interaction.member as GuildMember;
	const option = interaction.options as CommandInteractionOptionResolver;

	if (interaction.channel?.id !== '349129439927468032')
		return;

	if (member.roles.cache.some(role => role.name === "Administrator" || role.name === 'Master')) 
	{
        const user = option.getUser("user") as User;
		const role = option.getRole("role") as Role;
        
        if (user) 
		{
            const target = await interaction.guild?.members.fetch(user.id);
            
            if (target) 
			{
                if (role) 
				{
                    const result = await target.roles.remove(role.id);
					
                    return interaction.reply(`${role.name} role has been removed from ${result.displayName}.`);
                } 
				
				return interaction.reply(`Role not found, unable to remove role from ${user.displayName}.`);
            }

			return interaction.reply('The mentioned user does not exist in the guild.');
        } 
		
		return interaction.reply('Please mention a user to remove their role.');
    } 
	
	return interaction.reply('You do not have permission to access this command.');
}
