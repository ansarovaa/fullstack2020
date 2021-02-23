import React from 'react'

const FindCountries = ({country, setCountry}) => {

    return (
        <div>
            find country:
            <input value={country} onChange={event => setCountry(event.target.value)}/>
        </div>
    )

}

export default FindCountries