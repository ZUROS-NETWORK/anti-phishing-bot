
import { configFile } from "../../config";
import { deleteAllMessages } from "../Actions/MsgDelete";
import { DiscordUrl } from "./DiscordUrl"
import { PhishingUrl } from "./PhishingUrl"
import { Spam } from "./SpamUrl";
import { Honeypot } from "./honeypot"
const config = configFile.AutoMod
export const AutoMod = async (client, message) => {
    if (config.honeypot_system.enabled) {
        await Honeypot(client, message, config.honeypot_system).catch((error) => {
            console.error('Error in the Honeypot function:', error);
        });
    }
    if (client.config.honeypotChannelId !== message.channel.id) {
        if (config.external_server_invitation_link.enabled) {
            await DiscordUrl(client, message, config.external_server_invitation_link).catch((error) => {
                console.error('Error in the DiscordUrl function:', error);
            });
        }
        if (config.phishing_scam_links.enabled) {
            await PhishingUrl(client, message, config.phishing_scam_links).catch((error) => {
                console.error('Error in the PhishingUrl function:', error);
            });
        }
        if (config.fast_link_spam.enabled) {
            await Spam(client, message, config.fast_link_spam).catch((error) => {
                console.error('Error in the SpamUrl function:', error);
            });
        }
    }
}