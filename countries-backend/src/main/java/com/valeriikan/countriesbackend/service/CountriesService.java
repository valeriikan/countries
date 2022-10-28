package com.valeriikan.countriesbackend.service;

import com.valeriikan.countriesbackend.model.Country;
import com.valeriikan.countriesbackend.model.CountryDTO;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;

import static com.valeriikan.countriesbackend.util.CountriesConstants.*;

@Service
public class CountriesService {
    private final WebClient webClient;

    public CountriesService(WebClient webClient) {
        this.webClient = webClient;
    }

    public List<CountryDTO> getAllCountries() {
        String uri = API_COUNTRIES_ALL + API_FILTER;
        return getCountriesByUri(uri);
    }

    public List<CountryDTO> getCountriesByName(String name) {
        String uri = API_COUNTRIES_BY_NAME + "/" + name + API_FILTER;
        return getCountriesByUri(uri);
    }

    public CountryDTO getCountryByFullName(String name) {
        String uri = API_COUNTRIES_BY_NAME + "/" + name + API_FILTER + "&fullText=true";
        return getCountriesByUri(uri).get(0);
    }

    private List<CountryDTO> getCountriesByUri(String uri) {
        List<CountryDTO> countryDTOS = new ArrayList<>();
        List<Country> countries = webClient.get().uri(uri)
                .retrieve().bodyToMono(new ParameterizedTypeReference<List<Country>>() {}).block();

        if (countries != null) {
            for (Country country : countries) {
                countryDTOS.add(new CountryDTO(country));
            }
        }

        return countryDTOS;
    }
}
