import { DiscordUrl } from "./DiscordUrl"
import { Honeypot } from "./honeypot"

export const AutoMod = async (client, message) => {
    DiscordUrl(client, message)
    Honeypot(client, message)
}