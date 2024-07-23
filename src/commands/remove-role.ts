import { CommandInteraction, SlashCommandBuilder, GuildMember, CommandInteractionOptionResolver } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("remove-role")
  .setDescription("this is auth command");

export async function execute(interaction: CommandInteraction) 
{
	const member = interaction.member as GuildMember;
	const option = interaction.options as CommandInteractionOptionResolver;

	if (interaction.channel?.id !== '349129439927468032')
		return;

	if (member.roles.cache.some(role => role.name === "Administrator" || role.name === 'Master')) 
	{
        const user = option.getUser("user");
        
        if (user) 
		{
            const userRemove = interaction.guild?.members.cache.get(user.id);
            
            if (userRemove) 
			{
                const role = interaction.guild?.roles.cache.find(role => role.name === 'Member');
                
                if (role) 
				{
                    await userRemove.roles.remove(role.id);
					
                    return interaction.reply(`${userRemove} role has been removed.`);
                } 
				else 
				{
                    return interaction.reply('Role "Member" does not exist.');
                }
            } 
			else 
			{
                return interaction.reply('The mentioned user does not exist in the guild.');
            }
        } 
		else 
		{
            return interaction.reply('Please mention a user to remove their role.');
        }
    } 
	else 
	{
        return interaction.reply('You do not have permission to access this command.');
    }
}
