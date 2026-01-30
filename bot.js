const { Telegraf } = require('telegraf')
require('dotenv').config()

const { mainMenuKeyboard } = require('./keyboards/mainMenu')
const { profile } = require('./commands/profile')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
	ctx.reply('I am a bot that send you the latest information about buisness and finance!')
	ctx.reply('Wybierz opcję:', mainMenuKeyboard())
})

bot.command('help', ctx => ctx.reply('test!'))

bot.command('menu', ctx => {
	ctx.reply('Wybierz dostępne opcje', mainMenuKeyboard())
})

bot.action('profile', profile)

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
