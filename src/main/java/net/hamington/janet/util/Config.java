package net.hamington.janet.util;

import org.yaml.snakeyaml.Yaml;

import java.io.InputStream;
import java.util.Map;

public class Config {
    private Map<String, Object> config = null;

    Config(){}
    Config(String configFile) {
       Yaml yaml = new Yaml();
       InputStream iStream = null;
       iStream = this.getClass().getClassLoader().getResourceAsStream(configFile);
       config = yaml.load(iStream);
    }

    public Object get(String key) {
        return config.get(key);
    }
}
