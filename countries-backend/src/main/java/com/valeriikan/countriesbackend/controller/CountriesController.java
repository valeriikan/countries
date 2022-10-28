package com.valeriikan.countriesbackend.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.valeriikan.countriesbackend.jacksonViews.Views;
import com.valeriikan.countriesbackend.model.CountryDTO;
import com.valeriikan.countriesbackend.service.CountriesService;
import com.valeriikan.countriesbackend.util.CountriesConstants;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = CountriesConstants.URI_COUNTRIES)
public class CountriesController {

    private final CountriesService countriesService;

    public CountriesController(CountriesService countriesService) {
        this.countriesService = countriesService;
    }

    @GetMapping
    @JsonView(Views.Summary.class)
    public List<CountryDTO> getAllCountries() {
        return countriesService.getAllCountries();
    }

    @GetMapping("/{name}")
    @JsonView(Views.Summary.class)
    public List<CountryDTO> getCountriesByName(@PathVariable String name, HttpServletResponse response) {
        try {
            return countriesService.getCountriesByName(name);
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }

    @GetMapping("/{name}/details")
    @JsonView(Views.Details.class)
    public CountryDTO getCountryByFullName(@PathVariable String name, HttpServletResponse response) {
        try {
            return countriesService.getCountryByFullName(name);
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return null;
        }
    }
}
