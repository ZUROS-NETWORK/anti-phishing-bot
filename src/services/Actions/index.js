
import { addRole } from "./AddRoles"
import { deleteAllMessages } from "./MsgDelete"
import { sendMessage } from "./SendMsg"
import { removeRoles } from "./RemoveRoles"
import { sendPrivateMsg } from "./SendPrivateMsg"
export const Actions = async ({ client, options, userId }) => {
    if (options.deleteAllMessages.enabled) {
        await deleteAllMessages(client, userId, options.deleteAllMessages.maxMsg)
    }
    if (options.removeRoles.enabled) {
        await removeRoles(client, userId)
    }
    if (options.Blacklister.enabled) {
        await addRole(client, userId, client.config.blackListRoleId)
    }
    if (options.sendMessages.enabled) {
        await sendMessage(client, client.config.sanctionNoticeChannelId, `<@${userId}> ${options.sendMessages.msg}`)
    }
    if (options.sendPrivateMessages.enabled) {
        const server = await client.guilds.fetch(client.config.serverId);
        await sendPrivateMsg(client, userId,
        `>>> ## ${server.name} \n${options.sendPrivateMessages.msg}`);
    }
} 
