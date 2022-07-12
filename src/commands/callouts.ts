import fs from "fs"
import { CommandInteraction, User } from "discord.js"
import { ping } from "../util"
import { Config } from "../resources/config.json"
import slapWeapons from "../resources/weapons.json"

function upperBoundedRand(upperBound: number): number {
    return Math.floor(Math.random() * upperBound)
}

function getRandomBonkImage(): string {
    const dir = `${Config.resources.root}/${Config.resources.bonkImages}`
    const images: string[] = fs.readdirSync(dir)
    const index: number = upperBoundedRand(images.length)
    return `${dir}/${images[index]}`
}

function getWeapon(): string {
    const index: number = upperBoundedRand(slapWeapons.length)
    return slapWeapons[index]
}

export async function slap(interaction: CommandInteraction) {
    const weapon: string = getWeapon()
    const slapper: User = interaction.user
    const slapee: User = interaction.options.get("target")?.user as User
    await interaction.reply(`*\\*${ping(slapper)} slaps ${ping(slapee)} with a ${weapon}!*\\*`)
}

export async function bonk(interaction: CommandInteraction) {
    const bonkee: User = interaction.options.get("target")?.user as User
    const bonkImg: fs.ReadStream = fs.createReadStream(getRandomBonkImage())
    await interaction.reply({
        content: `${ping(bonkee)}`,
        files: [bonkImg]
    })
}