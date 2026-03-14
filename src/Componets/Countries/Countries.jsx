import React, { use, useState } from 'react';
import Country from '../Country';
import './Countries.css';


const Countries = ({ CountriesPromise }) => {
    const CountryS = use(CountriesPromise);
    const AllCountry = CountryS.countries;

    const [visitCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log('click', country);

        const visitCountriesS = [...visitCountries, country];
        setVisitedCountries(visitCountriesS);

    }

    const style = {
        padding: '10px 10px',
    }


    return (
        <div style={style}>
            <h4>All Countries:{AllCountry.length}</h4>
            <h2>Total visited country:{visitCountries.length}</h2>

            <ol>
                {

                    visitCountries.map(country => <li>{country.name.common}</li>)

                }
            </ol>
            <div className='Countries'>
                {
                    AllCountry.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;