import { CommandInteraction, SlashCommandBuilder, CommandInteractionOptionResolver } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!")
  .addStringOption(option => 
    option
      .setName("message")
      .setDescription("The message to include in the reply")
      .setRequired(false)
  );

export async function execute(interaction: CommandInteraction) {
    // Retrieve the argument value
    const opts = interaction.options as CommandInteractionOptionResolver;
    const message = opts.getString("message");

	const channel = interaction.guild?.channels.cache.find(channel => channel.name === 'bot-room');

	if (!channel)
		return interaction.reply(`You cannot use this command in this channel`);

    // Reply with the default "Pong!" or include the provided message
    const reply = message ? `Pong! You said: ${message}` : "Pong!";

    // Ensure the interaction is replied to within the allowed time frame
    return interaction.reply(reply);
}
