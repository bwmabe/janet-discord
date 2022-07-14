import {CommandInteraction} from "discord.js"
import {TestLog} from "./testLog"

export function log(object: CommandInteraction | TestLog | string): string | void {
    let body = undefined
    if ((object instanceof CommandInteraction) || (object instanceof TestLog)) {
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
    return JSON.stringify(body)
}