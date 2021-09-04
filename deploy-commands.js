/*
 * taken from https://discordjs.guide/creating-your-bot/creating-commands.html
 */

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
		new SlashCommandBuilder()
			.setName('ping')
			.setDescription('Replies with pong!'),
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
					.setRequired(true))
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
