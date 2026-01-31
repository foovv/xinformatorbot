const { Telegraf, session } = require('telegraf')
require('dotenv').config()

const { mainMenuKeyboard } = require('./keyboards/mainMenu')
const { languageMenu } = require('./keyboards/languageMenu')
const { profile } = require('./commands/profile')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(session())

bot.action('set_lang_polish', ctx => {
	if (!ctx.session) {
		ctx.session = {}
	}
	ctx.session.language = 'pl'
	ctx.answerCbQuery()
	ctx.reply('Język został zmieniony na polski')
})

bot.action('set_lang_english', ctx => {
	if (!ctx.session) {
		ctx.session = {}
	}
	ctx.session.language = 'eng'
	ctx.answerCbQuery()
	ctx.reply('The language has been changed to English.')
})

bot.start(ctx => {
	ctx.reply('I am a bot that send you the latest information about buisness and finance!')
	ctx.reply('Select the options below:', mainMenuKeyboard())
})

bot.command('menu', ctx => {
	ctx.reply('Wybierz dostępne opcje:', mainMenuKeyboard())
})

bot.action('profile', profile)

bot.action('language', ctx => {
	if (!ctx.session) {
		ctx.session = {}
	}

	const language = ctx.session.language === 'pl' ? 'Dostępne języki' : 'Available languages'
	ctx.answerCbQuery()
	ctx.reply(language, languageMenu())
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
