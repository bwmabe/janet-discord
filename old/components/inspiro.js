const fetch = require('node-fetch');

const headers = {
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515  Safari/537.36'
}

let skel_options = {
	method: 'GET',
	headers: headers
};

module.exports = async function (interaction) {
	let inspiration = await getInspired();
	try{
		await interaction.reply(inspiration);
	} catch {
	}
}

async function getInspired() {
	var inspiration = null;

	let url = "https://inspirobot.me/api?generate=true";
	let options = Object.assign({}, skel_options);
	let response = await fetch(url, options);
	inspiration = await response.text();

	if (inspiration != null) {
		return inspiration;
	} else {
		return "i am uninspired";
	}
}
