package net.hamington.janet.commands;


import java.util.Map;

/*
 * I want the commands to be a map
 * I think YAML?
 * Maybe a base class with name and description.
 *
 */
public class CommandHandler {
    private Map<String, Command> commands;
    public CommandHandler(String configFilePath)
    {
        // Do something to load the file here
    }
}
