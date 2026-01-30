const { Markup } = require('telegraf')

const mainMenuKeyboard = () => Markup.inlineKeyboard([[Markup.button.callback('👤 Profil', 'profile'), Markup.button.callback('🌐 Język', 'language')]])

module.exports = { mainMenuKeyboard }
