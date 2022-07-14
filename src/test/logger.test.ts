import {log} from "../logger"
import {TestLog} from "../testLog"

const commandInteractionLog = {
    command: "commandName",
    guild: {
        name: "guildName",
        id: "guildId"
    },
    user: {
        name: "username",
        id: "userId"
    }
}

const stringLog = {
    info: "information"
}

describe("Logger Tests", () => {
    it("can log a CommandInteraction", () => {
        const testLog = new TestLog()
        const loggedMessage = log(testLog)
        expect(loggedMessage).toEqual(JSON.stringify(commandInteractionLog))
    })
    it("can log a string", () => {
        const test = "information"
        const loggedMessage = log(test)
        expect(loggedMessage).toEqual(JSON.stringify(stringLog))
    })
})