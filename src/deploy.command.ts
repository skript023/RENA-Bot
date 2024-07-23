import { REST, Routes } from "discord.js";
import { config } from "./config/config";
import { commands } from "./commands";
import signale from "signale";

const commandsData = Object.values(commands).map((command) => command.data);

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

type DeployCommandsProps = {
    guildId: string;
};

export async function deployCommands({ guildId }: DeployCommandsProps) {
    try 
    {
        signale.await("Started refreshing application (/) commands.");
        
        await rest.put(Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),{
                body: commandsData,
            }
        );

        signale.success("Successfully reloaded application (/) commands.");
    } 
    catch (error) 
    {
        signale.error(error);
    }
}
