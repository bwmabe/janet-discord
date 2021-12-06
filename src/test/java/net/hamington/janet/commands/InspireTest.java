package net.hamington.janet.commands;

import org.junit.Test;

import static org.junit.Assert.*;

public class InspireTest {
    @Test
    public void testConstruction() {
        Command inspire = new Inspire();
        assertEquals(inspire.name, "inspire");
        assertNotNull(inspire.description);
    }

}