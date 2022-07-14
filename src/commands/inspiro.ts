import axios, { AxiosRequestConfig } from "axios"

const options: AxiosRequestConfig  = {
    url: "https://inspirobot.me/api?generate=true",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4515  Safari/537.36"
    },
    method: "GET"
}

async function getInspired() {
    const response = await axios.request(options)
    if (response.status != 200) {
        console.log("aaa") 
    }
}

getInspired()