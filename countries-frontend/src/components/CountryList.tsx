import { FunctionComponent } from 'react';
import { Country } from '../models';
import { CountryListItem } from './CountryListItem';
import styles from './CountryList.module.css';

type Props = {
    countries: Array<Country> | null;
    loading: boolean;
};
export const CountryList: FunctionComponent<Props> = ({ countries, loading }) => {
    const content = loading 
        ? (<span className={styles.status}>Loading...</span>)
        : countries != null
            ? countries.length > 0
                ? (countries.map((country) => <CountryListItem country={country} />))
                : (<span className={styles.status}>No countries found for this request</span>)
            : null;

    return (
        <ul className={styles.list} id={'countryList'}>
            {content}
        </ul>
    );
};
