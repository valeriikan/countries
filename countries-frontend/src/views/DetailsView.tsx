import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APP_BASE_URL, getCountryByFullName } from '../api';
import { Country } from '../models';
import styles from './DetailsView.module.css';

export const DetailsView: FunctionComponent = () => {
    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCountryByName(): Promise<void> {
            const country = name != null ? await getCountryByFullName(name) : null;
            setCountry(country);
            setLoading(false);
        }
        fetchCountryByName();
    }, [name]);

    function openCountrySearch() {
        navigate(APP_BASE_URL);
    }

    const content =
        country !== null ? (
            <div className={styles.details}>
                <img className={styles.image} src={country.flagFileUrl} alt={country.name} />
                <div className={styles.country}>
                    <span>{`Country: ${country.name}`}</span>
                    <span>{`Capital: ${country.capital}`}</span>
                    <span>{`Code: ${country.countryCode}`}</span>
                    <span>{`Population: ${country.population}`}</span>
                </div>
            </div>
        ) : loading ? (
            <span className={styles.status}>Loading...</span>
        ) : (
            <span className={styles.status}>Error while loading country details</span>
        );

    return (
        <div className={styles.view}>
            <button className={styles.button} onClick={openCountrySearch} type={'button'}>
                Back
            </button>
            {content}
        </div>
    );
};

export default DetailsView;
