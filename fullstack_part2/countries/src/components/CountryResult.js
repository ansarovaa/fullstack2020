import React from 'react'
import CountryInformation from './CountryInformation'

const CountryResult = ({country, setCountry, countries}) => {

    const searchCountry =  (countries.filter(e => e.name.includes(country)))
   
    return (
        
        <div>
            {
                country.length === 0 ?
                <p>Please enter country name</p>
                :
                searchCountry.length > 10 ?
                <p>Too many matches, specify another filter.</p>
                :
                searchCountry.length === 1 ?
                <CountryInformation country={searchCountry[0]} />
                :
                <ul>
                    {
                        searchCountry.map(names => (
                            <li key={names.name}>
                                {names.name} 
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )

}

export default CountryResult