package net.hamington.janet;

import net.dv8tion.jda.api.*;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.events.interaction.SlashCommandEvent;
import net.dv8tion.jda.api.entities.Activity;

import java.util.Collections;

import javax.security.auth.login.LoginException;


public class Bot extends ListenerAdapter {
	public static void main(String[] argv) throws LoginException
	{
		if(argv.length < 1) {
			System.out.println("missing token");
			System.exit(1);
		}

		JDA jda = JDABuilder.createLight(argv[0], Collections.emptyList())
			.addEventListeners(new Bot())
			.setActivity(Activity.playing("with her testicles"))
			.build();

		jda.upsertCommand("ping", "does the ping thing").queue();
	}

	@Override
	public void onSlashCommand(SlashCommandEvent event) {
		if(!event.getName().equals("ping")) return;
		long time = System.currentTimeMillis();
		event.reply("Boop!").setEphemeral(true)
			.flatMap( v -> 
					event.getHook().editOriginalFormat("Booped in: %d ms", (System.currentTimeMillis() - time))
			).queue();
	}
}
