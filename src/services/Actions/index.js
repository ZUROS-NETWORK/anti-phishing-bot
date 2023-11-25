
import { addRole } from "./AddRoles"
import { deleteAllMessages } from "./MsgDelete"
import { sendMessage } from "./SendMsg"
import { removeRoles } from "./RemoveRoles"
export const Actions = async ({ client, options, userId }) => {
    if (options.deleteAllMessages.enabled) {
        await deleteAllMessages(client, userId, options.deleteAllMessages.maxMsg)
    }
    if (options.deleteAllMessages.enabled) {
        await removeRoles(client, userId)
    }
    if (options.Blacklister.enabled) {
        await addRole(client, userId, client.config.blackListRoleId)
    }
    if (options.sendMessages.enabled) {
        await sendMessage(client, client.config.sanctionNoticeChannelId, `<@${userId}> ${options.sendMessages.msg}`)
    }
} 
