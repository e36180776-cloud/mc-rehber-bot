const mineflayer = require('mineflayer');
const config = require('./config.json');

const bot = mineflayer.createBot({
  host: config.host,
  port: config.port,
  username: config.username,
  version: config.version
});

bot.on('spawn', () => {
  console.log('Bot sunucuya başarıyla girdi!');
  bot.chat('Selam! Ben BlokPatron rehber botuyum.');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message.toLowerCase() === 'selam') {
    bot.chat(`Aleykümselam ${username}, hoş geldin!`);
  }
});

bot.on('error', (err) => console.log('Hata:', err));
bot.on('end', () => console.log('Bağlantı koptu, yeniden bağlanılıyor...'));
  
