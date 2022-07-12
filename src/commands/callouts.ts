import fs from 'fs'
import { CommandInteraction, User } from 'discord.js'
import { ping } from '../util'
import { Config } from '../resources/config.json'
import slapWeapons from '../resources/weapons.json'

function upperBoundedRand(upperBound: number): number {
    return Math.floor(Math.random() * upperBound)
}

function getRandomBonkImage(): string {
    let dir: string = `${Config.resources.root}/${Config.resources.bonkImages}`
    let images: string[] = fs.readdirSync(dir)
    let index: number = upperBoundedRand(images.length)
    return `${dir}/${images[index]}`
}

function getWeapon(): string {
    let index: number = upperBoundedRand(slapWeapons.length)
    return slapWeapons[index]
}

export async function slap(interaction: CommandInteraction) {
    let weapon: string = getWeapon()
    let slapper: User = interaction.user
    let slapee: User = interaction.options.get('target')?.user as User
    await interaction.reply(`*\\*${ping(slapper)} slaps ${ping(slapee)} with a ${weapon}!*\\*`)
}

export async function bonk(interaction: CommandInteraction) {
    let bonkee: User = interaction.options.get('target')?.user as User
    let bonkImg: fs.ReadStream = fs.createReadStream(getRandomBonkImage())
    await interaction.reply({
        content: `${ping(bonkee)}`,
        files: [bonkImg]
    })
}