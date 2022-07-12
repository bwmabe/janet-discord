import { Client, Intents, Interaction } from "discord.js"
import { token } from "./resources/config.json"
import { cute } from "./commands/cute"
import { slap, bonk } from "./commands/callouts"
import { inspire } from "./commands/inspiro"

const client: Client = new Client({
    intents: [Intents.FLAGS.GUILDS]
})

client.once("ready", () => {
    console.log("Ready for action!")
})

client.on("interactionCreate", async function(interaction: Interaction) {
    if (!interaction.isCommand()) return

    const commandName: string = interaction.commandName

    switch(commandName) {
    case "ping":
        await interaction.reply(`henlo <@${interaction.user.id}`)
        break
    case "server":
        await interaction.reply(`Server: ${interaction.guild?.name}\nMembers: ${interaction.guild?.memberCount}`)
        break
    case "user":
        await interaction.reply(`Tag: ${interaction.user.tag} Id: ${interaction.user.id}`)
        break
    case "cute":
        await cute(interaction)
        break
    case "slap":
        await slap(interaction)
        break
    case "bonk":
        await bonk(interaction)
        break
    case "inspire":
        await inspire(interaction)
        break
    default:
        return
    }
})