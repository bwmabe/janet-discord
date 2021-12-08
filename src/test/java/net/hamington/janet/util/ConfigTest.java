package net.hamington.janet.util;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class ConfigTest extends Config {
    private Config testConfig = new Config("test.yaml");

    @Test
    public void testGet() {
        List<Object> c = new ArrayList<>();
        List<Object> d = new ArrayList<>();
        c.add(3);
        c.add(4);
        d.add("five");
        d.add("6");
        d.add(7);
        assertEquals(testConfig.get("a"), "1");
        assertEquals(testConfig.get("b"), 2);
        assertEquals(testConfig.get("c"), c);
        assertEquals(testConfig.get("d"), d);
    }
}