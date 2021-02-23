import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FindCountries from './components/FindCountries'
import CountryResult from './components/CountryResult'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [country, setCountry] = useState('');
 

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
  
      });
  
  }, []);


  return (
    <div>
      <FindCountries country={country} setCountry = {setCountry}/>
      <CountryResult country={country} countries = {countries} setCountry = {setCountry}/>
    </div>
  )
}

export default App 