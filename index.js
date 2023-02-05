require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const webAppURL = `${process.env.WEB_APP_URL}`;
const token = `${process.env.TOKEN}`;
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(msg.from.id,
        `Hi, ${!msg.from.username ? msg.from.first_name : msg.from.username}✋\n,Это я 😉`, {});
    bot.sendMessage(chatId,
        `Hi, ${!msg.from.username ? msg.from.first_name : msg.from.username}✋\nI'll help you find the movies you need 😉`, {});

    bot.sendMessage(chatId,
        `👇I have a button. Press it to launch me👇`,
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Let's GO!", web_app: {url: webAppURL}}]
                ]
            }
        });
});