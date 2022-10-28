import { FunctionComponent, useState } from 'react';
import { getAllCountries, getCountriesByName } from '../api';
import { Country } from '../models';
import styles from './SearchBox.module.css';

type Props = {
    onSearching: (isSearching: boolean) => void;
    onSearchResult: (countries: Array<Country> | null) => void;
};
export const SearchBox: FunctionComponent<Props> = ({ onSearching, onSearchResult }) => {
    const [name, setName] = useState<string>('');

    async function fetchCountries(): Promise<void> {
        onSearching(true);
        const countries =
            name.trim().length === 0 ? await getAllCountries() : await getCountriesByName(name);
        onSearchResult(countries);
        onSearching(false);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.code === 'Enter') {
            fetchCountries();
        } else if (event.code === 'Backspace') {
            onSearchResult(null);
        }
    }

    return (
        <div className={styles.box}>
            <input
                autoComplete={'off'}
                id={'searchBox'}
                placeholder={'Enter country name'}
                value={name}
                onChange={(event) => setName(event.target.value)}
                onKeyDown={(event) => handleKeyDown(event)}
            />
            <button className={styles.button} onClick={fetchCountries} type={'button'}>
                Search
            </button>
        </div>
    );
};
