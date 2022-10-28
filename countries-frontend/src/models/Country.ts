interface CountryContstructor {
    name: string;
    countryCode: string;
    capital: string;
    population: number;
    flagFileUrl: string;
}

export class Country {
    public readonly name: string;
    public readonly countryCode: string;
    public readonly capital: string;
    public readonly population: number;
    public readonly flagFileUrl: string;

    constructor(country: CountryContstructor) {
        this.name = country.name;
        this.countryCode = country.countryCode;
        this.capital = country.capital;
        this.population = country.population;
        this.flagFileUrl = country.flagFileUrl;
    }
}
