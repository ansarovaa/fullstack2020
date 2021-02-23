import React from 'react'
import WeatherInfo from './WeatherInfo'

const CountryInformation = ({country}) => {
    return (
        <div>
            Capital:
            <p>{country.capital}</p>
            Population:
            <p>{country.population}</p>
            Currencies:
            <ul>
                {country
                    .currencies
                    .map(currency => <li key={currency.name}>{currency.name}</li>)
}
            </ul>
            <img
                src
                ={country.flag}
                alt='Flag'
                style={{
                width: 300,
                height: 100
            }}/>
            <WeatherInfo country = {country}/>
        </div>
    )

}

export default CountryInformation