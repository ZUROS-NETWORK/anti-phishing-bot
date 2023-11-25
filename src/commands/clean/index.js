const { deleteAllMessages } = require("../../services/Actions/MsgDelete");

exports.run = async (client, message, args) => {
  await deleteAllMessages(client, args[0], args[1]).catch((error) => {
    message.reply('Error deleting message:', error);
  }).then(() => {
    message.reply('Successfully deleted messages');
  });
};
