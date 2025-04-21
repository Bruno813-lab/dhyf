const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'CardCraft.aternos.me',
  port: 60232,
  username: 'AFKBot'
})

bot.on('spawn', () => {
  console.log('Bot conectado e pronto!')
  setInterval(() => bot.setControlState('jump', true), 1000)
})