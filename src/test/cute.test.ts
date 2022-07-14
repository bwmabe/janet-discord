import { getCutePost } from "../commands/cute"

describe("testing getting posts", () => {
    it("gets a post", async () => {
        console.log("test running")
        const url = await getCutePost()
        expect(url).not.toContain("Error")
        console.log(url)
    })
})