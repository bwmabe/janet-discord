import { User } from "discord.js";

export function ping(user: User): string {
    return `<@${user.id}>`
}