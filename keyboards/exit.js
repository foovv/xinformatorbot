const { Markup } = require('telegraf')

const exitKeyboard = (language) => {


    const backButton = language === 'pl' ? '❌ Wstecz' : '❌ Exit'
    const menuButton = language === 'pl' ? '💼 Menu' : '💼 Menu'

    return Markup.inlineKeyboard([
        Markup.button.callback(backButton, 'exit'),
        Markup.button.callback(menuButton, 'menu')
    ])

}



module.exports = { exitKeyboard }