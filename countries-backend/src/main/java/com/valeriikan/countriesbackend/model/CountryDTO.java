package com.valeriikan.countriesbackend.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.valeriikan.countriesbackend.jacksonViews.Views;

public class CountryDTO {
    public CountryDTO(Country country) {
        this.name = country.getName().get("common") != null ? (String) country.getName().get("common") : "Name is missing";
        this.countryCode = country.getCca2();
        this.capital = country.getCapital().size() > 0 ? country.getCapital().get(0) : "Capital is missing";
        this.population = country.getPopulation();
        this.flagFileUrl = country.getFlags().get("png") != null ? country.getFlags().get("png") : "Flag is missing";
    }

    private String name;
    private String countryCode;
    private String capital;
    private Long population;
    private String flagFileUrl;

    @JsonView(Views.Summary.class)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @JsonView(Views.Details.class)
    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    @JsonView(Views.Details.class)
    public String getCapital() {
        return capital;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    @JsonView(Views.Details.class)
    public Long getPopulation() {
        return population;
    }

    public void setPopulation(Long population) {
        this.population = population;
    }

    @JsonView(Views.Summary.class)
    public String getFlagFileUrl() {
        return flagFileUrl;
    }

    public void setFlagFileUrl(String flagFileUrl) {
        this.flagFileUrl = flagFileUrl;
    }
}
