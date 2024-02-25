const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('❬💞 \`BIENVENIDA CONFIGURADO\` 💞❭\n\n> _❬😍❭➢ Se ha configurado la bienvenida del para este grupo, se vera cuando la persona entre al grupo y el bot dara la bienvenida._');
  } else throw `❬💦 \`USO CORRECTO | WELCOME\` 💦❭:\n\n> _❬🎉❭➢ Ingrese cualquier texto de bienvenida, puede poner decoraciones o mas, se vera cuando la persona entre al grupo._\n\n❬😍 \`Opciones para mejorar\` 😍❭:\n\n> *@user (menciónar al usuario)*\n> *@group (mostrar nombre del grupo)*\n> *@desc (mostrar descripción del grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
