const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '!dnd';

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const body = message.content.slice(prefix.length).trim();
  const args = body.split(' ');
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'ping':
      const latency = Date.now() - message.createdTimestamp;
      message.reply(`Pong! This message had a latency of ${latency}ms.`);
      break;
    default:
      message.reply(`Sorry, I don't know that command`);
      break;
  }

});

client.login(require('./config.json').BOT_TOKEN);



