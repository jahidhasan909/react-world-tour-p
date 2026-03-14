import React, { use } from 'react';
import Country from '../Country';
import './Countries.css';


const Countries = ({ CountriesPromise }) => {
    const CountryS = use(CountriesPromise);
    const AllCountry = CountryS.countries;

    const style = {
        padding: '10px 10px',
    }


    return (
        <div style={style}>
            <h4>All Countries:{AllCountry.length}</h4>
            <div className='Countries'>
                {
                    AllCountry.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;