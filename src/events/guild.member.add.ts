import { GuildMember } from 'discord.js';

export const event = {
	name: "guildMemberAdd",
	type: "on",
	execute: (member: GuildMember) => {
		const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-goodbye') as any;

		if (!channel) return;

		channel.send(`Hallo ${member} Welcome to ${member.guild.name}`);
	}
}
