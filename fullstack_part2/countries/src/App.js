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
        console.log(setCountries(response.data))
      });
  
  }, []);
console.log(countries);
  

  /*const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>      
      <ul>
        {notesToShow.map((note, i) => 
          <Note key={i} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )*/
  return (
    <div>
      <FindCountries country={country} setCountry = {setCountry}/>
      <CountryResult country={country} countries = {countries}/>
    </div>
  )
}

export default App 