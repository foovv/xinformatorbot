const { Markup } = require('telegraf')

const languageMenu = () => Markup.inlineKeyboard([
    Markup.button.callback(
        "🇵🇱 Polski", 'polish'
    ),
    Markup.button.callback(
        "🇺🇸 English", 'english'
    )
])

module.exports = { languageMenu }