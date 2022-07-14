import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { CommandInteraction } from "discord.js"
import { getRand, containsAllowedDomain, sleep } from "../util"
import { host, ext, subs } from "../resources/cute.json"

const options: AxiosRequestConfig  = {
    url: `https://${host}/r/${getRand(subs)}${ext}`,
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4515  Safari/537.36"
    },
    method: "GET"
}

export async function getCutePost() {
    let postGotten = false
    let url = ""
    let response: AxiosResponse
    
    while (!postGotten) {
        response = await axios.request(options)
        if (response.status == 200) {
            url = response.data[0]["data"]["children"][0]["data"]["url"]
            postGotten = containsAllowedDomain(url)
        }
        if (!postGotten) {
            await sleep(2)
        }
    }

    if ( url !== "") {
        return url
    } else {
        return "Error getting cute"
    }
}

export async function cute(interaction: CommandInteraction) {
    await interaction.reply(await getCutePost())
}