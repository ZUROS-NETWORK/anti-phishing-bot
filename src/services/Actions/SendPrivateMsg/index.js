export const sendPrivateMsg = async (client, userId, content) => {
  try {
    const user = await client.users.fetch(userId);
    await user.send(content);
  } catch (error) {
    console.error(`Error sending message to user ${userId}: ${error.message}`);
  }
};
