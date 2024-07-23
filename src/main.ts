import { Client } from "discord.js";
import event from "./deploy.event";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

event.init(client);
