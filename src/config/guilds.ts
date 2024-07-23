import { config } from "./config"

export type DeployCommandsProps = {
    guildId: string;
};

export const guilds: DeployCommandsProps[] = [
	{ guildId: config.DISCORD_HELL_GATE_GUILD_ID as string },
	{ guildId: config.DISCORD_LOCAL_SERVER_GUILD_ID as string }
];
