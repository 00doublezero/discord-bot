import Discord from "discord.js";
import cliendId from "./config";
import { Smiles } from "./Smiles";
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Ready!");
});

client.on("message", (message) => {
    const messageContent: string = message.content.trim();
    const messageAuthor: string = message.author.username;
    const messageTemplate: string = messageAuthor;
    console.log(message.content);
    for (const prop in Smiles) {
        if (Smiles[prop].discordID === messageContent) {
            message.delete();
            message.channel.send(messageTemplate, { files: [Smiles[prop].fileURI] });
            break;
        }
    }
});

client.login(cliendId);