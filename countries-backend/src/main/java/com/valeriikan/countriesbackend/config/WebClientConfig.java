package com.valeriikan.countriesbackend.config;

import com.valeriikan.countriesbackend.util.CountriesConstants;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Bean
    public WebClient initWebClient() {
        return WebClient.create(CountriesConstants.API_SOURCE);
    }
}
