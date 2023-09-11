import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);


    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCountry = (country) => {
        console.log('add country to visited');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h4>Visited Countries {visitedCountries.length}</h4>


            <ul>
                {visitedCountries.map((country, index)=> (
                    <li key={index}>{country.name.common}</li>
                ))}
            </ul>



            <hr />
            <div className="boxStyle">

                {
                    countries.map(country => <Country
                        key={country.ccn2}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};


export default Countries;