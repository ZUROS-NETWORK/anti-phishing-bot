import { DiscordUrl } from "./DiscordUrl"
import { PhishingUrl } from "./PhishingUrl"
import { SpamUrl } from "./SpamUrl";
import { Honeypot } from "./honeypot"

export const AutoMod = async (client, message) => {
    await DiscordUrl(client, message).catch((error) => {
        console.error('Error in the DiscordUrl function:', error);
    });
    await Honeypot(client, message).catch((error) => {
        console.error('Error in the Honeypot function:', error);
    });
    await PhishingUrl(client, message).catch((error) => {
        console.error('Error in the PhishingUrl function:', error);
    });
    await SpamUrl(client, message).catch((error) => {
        console.error('Error in the SpamUrl function:', error);
    });
}