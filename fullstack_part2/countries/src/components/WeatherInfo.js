import React, {useState, useEffect} from 'react';
import axios from 'axios';

const WeatherInfo = ({country}) => {
    const [info,
        setInfo] = useState(null);

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.capital
        };

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => {
                setInfo(response.data.current)

            });

    }, [country]);

    return (

        <div>
            <h2>Weather in {country.capital}</h2>

            {(info === null)
                ? <p>The weather is ...</p>
                : <div>
                    <p>
                        Temperature: {info.temperature}
                        celcius</p>
                    < img src={info.weather_icons[0]} alt='Weather icon'/>
                    <p>
                        Wind: {info.wind_speed}
                        mph, direction {info.wind_dir}</p>
                </div>
}

        </div>
    );

}

export default WeatherInfo