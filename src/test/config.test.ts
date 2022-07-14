import { Config, loadConfig } from "../config"

const exampleConfig: Config = {
    token: "thisIsAToken",
    clientId: "exampleClientId",
    guildIds: ["guildId01", "guildId02"],
    bonkImagePath: "bonk"
}
describe("Testing config loading", () => {
    it("reads a file", () => {
        const loadedConfig = loadConfig("./src/test/resources/config.json")
        expect(loadedConfig.token).toEqual(exampleConfig.token)
        expect(loadedConfig.clientId).toEqual(exampleConfig.clientId)
        expect(loadedConfig.guildIds).toEqual(exampleConfig.guildIds)
    })
})