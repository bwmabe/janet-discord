import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { Interaction } from "discord.js"
import { getRand, containsAllowedDomain } from "../util"
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
    let url: string = ""
    let getRandomResponse: AxiosResponse
    
    while (!postGotten) {
        getRandomResponse = await axios.request(options)
        url = getRandomResponse.data[0]["data"]["children"][0]["data"]["url"]
        postGotten = containsAllowedDomain(url)
    }

    if ( url !== "") {
        return url
    } else {
        return "Error"
    }
}