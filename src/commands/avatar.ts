import { CommandInteraction, SlashCommandBuilder, EmbedBuilder, CommandInteractionOptionResolver } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("avatar")
  .setDescription("Get the avatar of a user")
  .addUserOption(option => 
    option
      .setName("user")
      .setDescription("The user to get the avatar of")
      .setRequired(false) // Optional: If not provided, will use the command executor's avatar
  )
  .addNumberOption(options =>
	options
	.setName('size')
	.setDescription('The size of user avatar')
	.setRequired(false)
  );

export async function execute(interaction: CommandInteraction) {
	const options = interaction.options as CommandInteractionOptionResolver;
	const user = options.getUser('user') || interaction.user;
	const size = options.getNumber('size') as 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | undefined;

	const embed = new EmbedBuilder()
		.setColor('#0099ff') // Optional: Set the embed color
		.setTitle(`${user.username}'s Avatar`)
		.setImage(user.displayAvatarURL({ forceStatic: true, size: !size ? 512 : size })) // Set avatar image
		.setFooter({ text: 'Avatar Preview' }); // Optional: Add a footer text

	await interaction.reply({ embeds: [embed] });
}
