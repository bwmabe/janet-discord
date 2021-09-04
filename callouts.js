const fs = require('fs');

module.exports = {
	slap: async function(interaction) {
		fs.readFile('./weapons.json', async(err, jsonString) => {
			const weapons = JSON.parse(jsonString);
			let weapon = weapons[Math.floor(Math.random() * weapons.length)];

			// Example formatting, inherited from the old Python version
			// "\*{} slaps you with a {}\*".format(author, weapon)
			await interaction.reply("slap slap slap");
		});
	}
}


/*
 *  Old Python code as an example
 *
 *  @commands.command(name='bonk')
 *  async def bonk(self, ctx):
 *		await ctx.send(file=discord.File(rand_image('resources/images/bonk/')))
 */
