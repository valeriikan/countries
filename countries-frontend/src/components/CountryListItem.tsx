import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_BASE_URL } from '../api';
import { Country } from '../models';
import styles from './CountryListItem.module.css';

type Props = {
    country: Country;
};
export const CountryListItem: FunctionComponent<Props> = ({ country }) => {
    const navigate = useNavigate();

    function openCountryDetails(name: string) {
        navigate(`${APP_BASE_URL}${name.trim().toLocaleLowerCase()}`);
    }

    return (
        <li
            key={country.name}
            className={styles.item}
            onClick={() => openCountryDetails(country.name)}
        >
            <img className={styles.image} src={country.flagFileUrl} alt={country.name} />
            <span className={styles.title}>{country.name}</span>
        </li>
    );
};
