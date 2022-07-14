import {log} from "../logger"
import {TestLog} from "../testLog"
const expectedTestLog = {
    command: "commandName",
    guild: {
        name: "guildName",
        id: "guildId"
    },
    user: {
        name: "username",
        id: "useId"
    }
}
describe("Logger Tests", () => {
    it("can log a CommandInteraction", () => {
        const testLog = new TestLog()
        const loggedMessage = log(testLog)
        expect(loggedMessage).toEqual(JSON.stringify(expectedTestLog))
    })
})