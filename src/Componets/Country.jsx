
import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries ,handleVisitedFlag}) => {

    const [Visit, SetNoVisit] = useState(false)

    const handler = () => {
        console.log('click');

        if (Visit) {
            SetNoVisit(false);
        } else {
            SetNoVisit(true);
        }
        handleVisitedCountries(country);
    }

    return (
        <div className={`Country ${Visit && 'visit'}`}>
            <img className='img' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area < 100980 ? 'Small Country' : 'Big Country'}</p>
            <button onClick={handler}>{Visit ? 'visit' : 'no visit'}</button>
            <button onClick={()=>{handleVisitedFlag(country?.flags?.flags?.png)}}>ADD Visited Flag</button>
        </div>
    );
};

export default Country;