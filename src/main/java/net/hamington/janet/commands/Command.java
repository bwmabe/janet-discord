package net.hamington.janet.commands;

interface Command {
    String name = "";
    String description = "";
    static Object run(){return null;};
}
