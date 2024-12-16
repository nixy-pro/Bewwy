/*

 * Simple base bot whatsapp
 * Created by Akmal Mods
 * Support by ChatGPT Assistant
 * Jangan delete credit ya ^^
 
 Contact Support:
 📞 Whatsapp : wa.me/6283898440549
 ☎ Telegram : t.me/anggazyydev
 
*/

global.owner = [
  "6283898440549", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.nomorbot = '62xxx'
global.urlfoto = 'https://'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})