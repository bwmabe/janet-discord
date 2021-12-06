package net.hamington.janet.util;

import net.hamington.janet.util.RequestHelper;
import org.junit.Test;

import java.util.concurrent.CompletableFuture;

import static org.junit.Assert.assertNotNull;

public class RequestHelperTest {
    @Test
    public void get() {
        CompletableFuture<String> response = RequestHelper.get("https://google.com");
        String body = RequestHelper.extractBody(response);
        assertNotNull(body);
    }
}