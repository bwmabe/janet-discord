package net.hamington.janet.commands;

import net.hamington.janet.util.RequestHelper;

import java.util.concurrent.CompletableFuture;

public class Inspire implements Command{
    protected static String name = "inspire";
    protected static String description = "gives you inspiration";

    public static String run() {
        CompletableFuture<String> response = RequestHelper.get("inspiroboturl");
        return RequestHelper.extractBody(response);
    }
}
