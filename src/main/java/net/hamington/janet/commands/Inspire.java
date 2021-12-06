package net.hamington.janet.commands;

import net.hamington.janet.util.RequestHelper;

import java.util.concurrent.CompletableFuture;

public class Inspire extends Command{
    public Inspire(){
        super.name = "inspire";
        super.description = "gives you inspiration";
    }

    public String run() {
        CompletableFuture<String> response = RequestHelper.get("inspiroboturl");
        return RequestHelper.extractBody(response);
    }
}
