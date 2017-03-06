require('dotenv').config()

const Slimbot = require('slimbot')
const R = require('ramda')

const slimbot = new Slimbot(process.env.TELEGRAM_BOT_TOKEN)
const getMessagerFirstName = R.path(['from', 'first_name'])

slimbot.on('message', (message) => {
  let messager = getMessagerFirstName(message)
  slimbot.sendMessage(message.chat.id, `${messager}, I hear ya. What're you looking for?`)
});

slimbot.startPolling();
