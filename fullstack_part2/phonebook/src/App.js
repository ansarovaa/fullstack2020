import React, {useState, useEffect } from 'react'
import axios from 'axios'
import People from './components/People'
import AddPeople from './components/AddPeople'
import FindPeople from './components/FindPeople'

const App = () => {
    const [persons,
        setPersons] = useState([]) //initial state of names in phone book
    const [newName,
        setNewName] = useState('')
    const [newNumber,
        setNewNumber] = useState('')
    const [findName,
        findNameInList] = useState('')

        useEffect(() => {
            console.log('effect')
            axios
              .get('http://localhost:3001/persons')
              .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
              })
          }, [])
        
          console.log('render', persons.length, 'persons')

    const addNameNumber = (event) => { //function to add new name into phonebook
        event.preventDefault()
        const newObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        axios
        .post('http://localhost:3001/persons', newObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          
        })
        
        const checkName = persons.find(person => person.name === newName)

        const checkNames = (checkName == undefined)
            ? setPersons(persons.concat(newObject))
            : alert(`${newName} is already added to phonebook`)

        setNewName('')
        setNewNumber('')
        findNameInList('')

    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleNameFind = (event) => {
        findNameInList(event.target.value)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <FindPeople findName = {findName} handleNameFind = {handleNameFind}/>
            <h2>Add a new</h2>
            <AddPeople
                addNameNumber={addNameNumber}
                newName={newName}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                newNumber={newNumber}/>
            <h2>Numbers</h2>

            <People persons={persons} findName={findName}/>
        </div>
    )
}

export default App