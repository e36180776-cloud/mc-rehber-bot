const mineflayer = require('mineflayer');
const fs = require('fs');

let config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

function createBot() {
    const bot = mineflayer.createBot({
        host: config.host,
        port: config.port,
        username: config.username,
        version: config.version
    });

    bot.on('login', () => {
        console.log("BAŞARDIM! Bot sunucuya girdi.");
    });

    bot.on('spawn', () => {
        console.log("Bot şu an sunucuda ayakta!");
    });

    bot.on('error', (err) => {
        console.log("Hata oluştu: " + err);
    });

    bot.on('end', () => {
        console.log("Bot bağlantısı koptu, tekrar deneniyor...");
        setTimeout(createBot, 5000);
    });
}

const http = require('http');
http.createServer((req, res) => {
    res.write("Bot Aktif!");
    res.end();
}).listen(10000);

createBot();
           
