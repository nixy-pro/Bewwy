/*

 * Simple base bot whatsapp
 * Created by Akmal Mods 
 * Support by ChatGPT Assistant
 * Jangan delete credit ya ^^
 
 Contact Support:
 📞 Whatsapp : wa.me/6283898440549
 ☎ Telegram : [ t.me/Bewwyy ]
 
*/


async function ytdl(url) {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

module.exports = { ytdl }