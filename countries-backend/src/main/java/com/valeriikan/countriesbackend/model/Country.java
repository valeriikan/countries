package com.valeriikan.countriesbackend.model;

import java.util.List;
import java.util.Map;

public class Country {
    private Map<String, Object> name;
    private String cca2;
    private List<String> capital;
    private Long population;
    private Map<String, String> flags;

    public Map<String, Object> getName() {
        return name;
    }

    public void setName(Map<String, Object> name) {
        this.name = name;
    }

    public String getCca2() {
        return cca2;
    }

    public void setCca2(String cca2) {
        this.cca2 = cca2;
    }

    public List<String> getCapital() {
        return capital;
    }

    public void setCapital(List<String> capital) {
        this.capital = capital;
    }

    public Long getPopulation() {
        return population;
    }

    public void setPopulation(Long population) {
        this.population = population;
    }

    public Map<String, String> getFlags() {
        return flags;
    }

    public void setFlags(Map<String, String> flags) {
        this.flags = flags;
    }
}
