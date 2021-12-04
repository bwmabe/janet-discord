const fetch = require('node-fetch');
const fs = require('fs');
const { resources } = require('../resources/config.json');

const headers = {
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515  Safari/537.36'
}

let skel_options = {
	//hostname: host,
	//port: 443,
	//path: null,
	method: 'GET',
	headers: headers
};

module.exports = async function (interaction){
	let cuteFile = resources.root + '/' + resources.cuteFile;
	fs.readFile(cuteFile, async(err, jsonString) => {
		const params = JSON.parse(jsonString);
		let post_url = await getRandomPost(params);
		try{
			await interaction.reply(post_url);
		}catch{
		}
	});
}


async function getRandomPost(params) {
	let postGotten = false;
	let url = null;
	while (postGotten == false) {
		let sub = params.subs[Math.floor(Math.random() * params.subs.length)];
		let options = Object.assign({}, skel_options);

		let response = await fetch("https://" + params.host + "/r/" + sub + params.ext, options);
		let data = await response.json();

		try{
			url = data[0]['data']['children'][0]['data']['url'];
		}catch (err) {
			// Do nothing, just continue, for now...
		}

		if (url.includes('i.reddit.com') || url.includes('gfycat.com') || url.includes('imgur.com')) {
			postGotten = true;
		}
	}

	if (url != null) {
		return url;
	} else {
		return "Error fetching reddit posts!";
	}
}
