const fs = require('fs');

function getRandomBonkImage() {
	let dir = './resources/images';
	let images = fs.readdirSync(dir);
	return `${dir}/${images[Math.floor(Math.random() * images.length)]}`;
}

module.exports = {
	slap: async function(interaction) {
		fs.readFile('./weapons.json', async(err, jsonString) => {
			const weapons = JSON.parse(jsonString);
			let weapon = weapons[Math.floor(Math.random() * weapons.length)];

			// Example formatting, inherited from the old Python version
			// "\*{} slaps you with a {}\*".format(author, weapon)
			let slapper = interaction.user;
			let slapee = interaction.options.get('target').member;
			await interaction.reply(`*\\*${slapper} slaps ${slapee} with a ${weapon}!*\\*`);
		});
	},

	bonk: async function(interaction) {
		let bonkee = interaction.options.get('target').member;
		let bonk_img = fs.createReadStream(getRandomBonkImage());
		await interaction.reply({content: `${bonkee}`, files: [bonk_img]});
	}
}


/*
 *  Old Python code as an example
 *
 *  @commands.command(name='bonk')
 *  async def bonk(self, ctx):
 *		await ctx.send(file=discord.File(rand_image('resources/images/bonk/')))
 */
