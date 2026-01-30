const profile = ctx => {
	const { id, username } = ctx.from

	ctx.answerCbQuery()
	ctx.reply(`Username: ${username}\nID: ${id}`)
}

module.exports = { profile }
