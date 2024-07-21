import { Client } from "discord.js";
import { config } from "./config/config";
import event from "./deploy.event";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

event.init(client);
