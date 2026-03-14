import React, { use } from 'react';
import Country from '../Country';


const Countries = ({ CountriesPromise }) => {
    const CountryS = use(CountriesPromise);
    const AllCountry = CountryS.countries;


    return (
        <div>
            <h4>All Countries:{AllCountry.length}</h4>
            {
                AllCountry.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;