import { CommandInteraction, SlashCommandBuilder, EmbedBuilder, CommandInteractionOptionResolver } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("avatar")
  .setDescription("Get the avatar of a user")
  .addUserOption(option => 
    option
      .setName("user")
      .setDescription("The user to get the avatar of")
      .setRequired(false)
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
		.setColor('#0099ff')
		.setTitle(`${user.username}'s Avatar`)
		.setImage(user.displayAvatarURL({ forceStatic: true, size: !size ? 512 : size }))
		.setFooter({ text: 'Avatar Preview' });

	return interaction.reply({ embeds: [embed] });
}
