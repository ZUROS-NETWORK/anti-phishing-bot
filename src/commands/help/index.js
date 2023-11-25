exports.run = async (client, message) => {
  const commands = `whitelist add <ID del Servidor>\`\` - Agrega un servidor a la whitelist
  whitelist remove <ID del Servidor>\`\` - Quita un servidor de la whitelist
  clean <ID DEL USUARIO> <NUMERO DE MENSAJES>\`\` - Borrar mensajes de un usuario
  help\`\` - Para ver la lista de comandos`;

  const revised = commands
    .split("\n")
    .map((x) => "• " + "``" + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(revised);
};
