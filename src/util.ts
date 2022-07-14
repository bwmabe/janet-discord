import { User } from "discord.js"

function upperBoundedRand(upperBound: number): number {
    return Math.floor(Math.random() * upperBound)
}

export function sleep(duration: number) {
    return new Promise<void>(r => setTimeout(r, duration * 1000))
}

export function ping(user: User): string {
    return `<@${user.id}>`
}

export function getRand<Type>(array: Type[]): Type {
    return array[upperBoundedRand(array.length)]
}

export function containsAllowedDomain(url: string): boolean {
    const allowedDomains = ["i.reddit.com", "i.redd.it", "imgur.com", "gfycat.com"]
    try {
        for(const domain in allowedDomains) {
            if( url.includes(domain) ) {
                return true
            }
        }
    } catch (err){
        console.error(err)
        return false
    }
    return false
}