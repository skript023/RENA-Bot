import { CommandInteraction, SlashCommandBuilder, CommandInteractionOptionResolver } from 'discord.js';
import signature from '../utils/signatures/signature';

export const data = new SlashCommandBuilder()
  .setName("sigsubstract")
  .setDescription("Perform calculate substract signature")
  .addStringOption(option => 
    option
      .setName("signature")
      .setDescription("The signature include for substraction")
      .setRequired(true)
  );

export async function execute(interaction: CommandInteraction) 
{
    const opts = interaction.options as CommandInteractionOptionResolver;

    const sig = opts.getString("signature");

	if (interaction.channel?.id !== '349129439927468032')
		return;

	if (sig)
	{
		if (signature.validate(sig))
		{
			const param = signature.convert(sig);
			const sub = signature.getSubstract(param);

			return interaction.reply(`${"```"}${sig}\nSubstraction: ${sub}${"```"}`);
		}
	}

    // Ensure the interaction is replied to within the allowed time frame
    return interaction.reply('Commands : !sigsubstract <signature>');
}
