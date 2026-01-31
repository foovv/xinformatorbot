const { Markup } = require('telegraf')

const languageMenu = () => 
    
    Markup.inlineKeyboard([

    Markup.button.callback("🇵🇱 Polski", 'set_lang_polish'),
    Markup.button.callback( "🇺🇸 English", 'set_lang_english')
])

module.exports = { languageMenu }