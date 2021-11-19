/*
 * taken from https://discordjs.guide/creating-your-bot/creating-commands.html
 */

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./resources/config.json');

const commands = [
		new SlashCommandBuilder()
			.setName('ping')
			.setDescription('Pings you!'),
		new SlashCommandBuilder()
			.setName('server')
			.setDescription('Replies with server info!'),
		new SlashCommandBuilder()
			.setName('user')
			.setDescription('Replies with user info!'),
		new SlashCommandBuilder()
			.setName('cute')
			.setDescription('Posts something cute!'),
		new SlashCommandBuilder()
			.setName('slap')
			.setDescription('Slaps someone with a thing!')
			.addUserOption( option => 
				option.setName('target')
					.setDescription('User to slap')
					.setRequired(true)),
		new SlashCommandBuilder()
			.setName('bonk')
			.setDescription('*bonk* Go to horny jail!')
			.addUserOption( option =>
				option.setName('target')
					.setDescription('horny bastard to bonk')
					.setRequired(true)),
		new SlashCommandBuilder()
			.setName('inspire')
			.setDescription('get some inspiration!')
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

for (let gid in guildId)
{
	console.log(gid);
	(async () => {
		try {
			await rest.put(
							Routes.applicationGuildCommands(clientId, guildId[gid]),
							{ body: commands },
			);

			console.log('Successfully registered application commands.');
		} catch (error) {
			console.error(error);
		}
	})();
}
