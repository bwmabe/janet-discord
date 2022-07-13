import fs from "fs"

export interface Config {
    token: string,
    clientId: string,
    guildIds: string[]
}

export function loadConfig(configFilePath: string): Config {
    const file = fs.readFileSync(configFilePath, 'utf8')
    return JSON.parse(file) as Config
}