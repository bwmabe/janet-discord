import axios, { AxiosRequestConfig } from "axios"
import { CommandInteraction } from "discord.js"
import { sleep } from "../util"

const options: AxiosRequestConfig  = {
    url: "https://inspirobot.me/api?generate=true",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4515  Safari/537.36"
    },
    method: "GET"
}

async function getInspired(): Promise< string | undefined > {
    const response = await axios.request(options)
    const MAX_ATTEMPTS = 5
    for(let i = 0; i < MAX_ATTEMPTS; i++){
        if (response.status == 200) {
            return response.data.text()
        } 
        sleep(2)
    }
}

export async function inspire(interaction: CommandInteraction) {
    const inspiration = await getInspired()
    if (inspiration !== undefined){
        interaction.reply(inspiration)    
    } else {
        interaction.reply("I am uninspired")
    }
}