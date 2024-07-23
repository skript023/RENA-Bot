import { CommandInteraction, SlashCommandBuilder, CommandInteractionOptionResolver } from 'discord.js';
import { info } from '../utils/info/bot.info';

export const data = new SlashCommandBuilder()
  .setName("info")
  .setDescription("Bot information!")
  .addStringOption(option => 
    option
      .setName("param")
      .setDescription("The param is <author> or <version> detail")
      .setRequired(false)
  );

export async function execute(interaction: CommandInteraction)
{
    const opts = interaction.options as CommandInteractionOptionResolver;
    const message = opts.getString("param");

	const channel = interaction.guild?.channels.cache.find(channel => channel.name === 'bot-room');

	if (!channel)
		return interaction.reply(`You cannot use this command in this channel`);

	let reply = `Bot Information\nName: ${info.name}\nAuthor: ${info.author}\nVersion:${info.version}\n${info.server}`;

    if (message === 'author')
	{
		reply = `Author: ${info.author}`;
	}
	else if (message === 'version')
	{
		reply = `Version: ${info.version}`;
	}

    return interaction.reply(reply);
}
