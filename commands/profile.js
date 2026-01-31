const { exitKeyboard } = require('../keyboards/exit')

const profile = ctx => {
	const { id, username } = ctx.from

	ctx.answerCbQuery()
	ctx.reply(`Username: ${username}\nID: ${id}`, exitKeyboard())
}

module.exports = { profile }
