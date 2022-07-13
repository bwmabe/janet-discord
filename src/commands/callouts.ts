import fs from "fs"
import { CommandInteraction, User } from "discord.js"
import { ping, getRand } from "../util"
import { Config } from "../config"
import slapWeapons from "../resources/weapons.json"



function getRandomBonkImage(bonkImagePath: string): string {
    const images: string[] = fs.readdirSync(bonkImagePath)
    return `${bonkImagePath}/${getRand(images)}`
}

export async function slap(interaction: CommandInteraction) {
    const weapon: string = getRand(slapWeapons)
    const slapper: User = interaction.user
    const slapee: User = interaction.options.get("target")?.user as User
    await interaction.reply(`*\\*${ping(slapper)} slaps ${ping(slapee)} with a ${weapon}!*\\*`)
}

export async function bonk(interaction: CommandInteraction, config: Config) {
    const bonkee: User = interaction.options.get("target")?.user as User
    const bonkImg: fs.ReadStream = fs.createReadStream(getRandomBonkImage(config.bonkImagePath))
    await interaction.reply({
        content: `${ping(bonkee)}`,
        files: [bonkImg]
    })
}