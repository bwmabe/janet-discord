package net.hamington.janet.commands;

import org.junit.Test;

import static org.junit.Assert.*;

public class InspireTest {
    @Test
    public void testConstruction() {
        assertEquals("inspire", Inspire.name);
        assertNotNull(Inspire.description);
    }

}