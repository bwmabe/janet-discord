/*
 * Taken from https://discordjs.guide/creating-your-bot/
 */

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./resources/config.json');
const cute = require('./components/cute.js');
const callouts = require('./components/callouts.js');
const inspire = require('./components/inspiro.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply(`<@${interaction.user.id}>`);
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'cute') {
		await cute(interaction);
	} else if (commandName === 'slap') {
		await callouts.slap(interaction);
	} else if (commandName === 'bonk') {
		await callouts.bonk(interaction);
	} else if (commandName === 'inspire') {
		await inspire(interaction);
	};
});

// Login to Discord with your client's token
client.login(token);
