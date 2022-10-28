import { FunctionComponent, useEffect, useState } from 'react';
import { getAllCountries } from '../api';
import { CountryList, SearchBox } from '../components';
import { Country } from '../models';
import styles from './SearchView.module.css';

export const SearchView: FunctionComponent = () => {
    const [countries, setCountries] = useState<Array<Country> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchAllCountries(): Promise<void> {
            setLoading(true);
            const countries = await getAllCountries();
            setCountries(countries);
            setLoading(false);
        }

        fetchAllCountries();
    }, []);

    return (
        <div className={styles.search}>
            <SearchBox onSearching={setLoading} onSearchResult={setCountries}></SearchBox>
            <CountryList countries={countries} loading={loading} />
        </div>
    );
};

export default SearchView;
