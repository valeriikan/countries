import axios from 'axios';
import { API_COUNTRIES_PATH } from '../api';
import { Country } from '../models';

export async function getAllCountries(): Promise<Array<Country>> {
    return await axios
        .get(API_COUNTRIES_PATH)
        .then((response) => response.data.map((country: any) => new Country(country)))
        .catch(() => []);
}

export async function getCountriesByName(name: string): Promise<Array<Country>> {
    return await axios
        .get(`${API_COUNTRIES_PATH}/${name}`)
        .then((response) => response.data.map((country: any) => new Country(country)))
        .catch(() => []);
}

export async function getCountryByFullName(name: string): Promise<Country | null> {
    return await axios
        .get(`${API_COUNTRIES_PATH}/${name}/details`)
        .then((response) => new Country(response.data))
        .catch(() => null);
}
