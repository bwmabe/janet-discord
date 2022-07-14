export class TestLog {
    commandName: string
    guild: {
        name: string,
        id: string
    }
    user: {
        username: string,
        id: string
    }
    constructor() {
        this.commandName = "commandName"
        this.guild = {
            name: "guildName",
            id: "guildId"
        }
        this.user = {
            username: "username",
            id: "useId"
        }
    }
}