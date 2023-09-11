import { useState } from "react";
import "./country.css"

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, area, ccn3, population} = country
    
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }
    console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ? 'visited' : ''}`}>
            <h4>Country Name: {name.common}</h4>
            <img src={flags.png} alt="flags" />
            <p>Official Name: {name.official}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {ccn3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visit</button>
            <br />
            <br />
            <button onClick={handleVisited}>Visited</button>

            { visited ? 'I have Visited the country' : 
            'I want to Visited the country' }

        </div>
    );
};

export default Country;