import {CommandInteraction} from "discord.js"

export function log(object: CommandInteraction | string) {
    let body = undefined
    if (object instanceof CommandInteraction) {
        body = {
            command: object.commandName,
            guild: {
                name: object.guild?.name,
                id: object.guild?.id
            },
            user: {
                name: object.user.username,
                id: object.user.id
            }
        }
    } else if(typeof object == "string") {
        body = {
            info: object
        }
    }
    console.log(JSON.stringify(body))
}