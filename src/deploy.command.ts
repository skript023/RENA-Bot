import { REST, Routes } from "discord.js";
import { config } from "@/config/config";
import { commands } from "./commands";
import signale from "signale";
import { guilds } from "./config/guilds";

const commandsData = Object.values(commands).map((command) => command.data);

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

export async function deployCommands() {
    try 
    {
        signale.await("Started refreshing application (/) commands.");
        
        for (const guild of guilds)
		{
			await rest.put(Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guild.guildId), {
					body: commandsData,
				}
			);
		}

        signale.success("Successfully reloaded application (/) commands.");
    } 
    catch (error) 
    {
        signale.error(error);
    }
}
