import React, {useState, useEffect} from 'react'
import axios from 'axios'
import People from './components/People'
import AddPeople from './components/AddPeople'
import FindPeople from './components/FindPeople'
import personService from './services/person'

const App = () => {
    const [persons,
        setPersons] = useState([]) //initial state of names in phone book
    const [newName,
        setNewName] = useState('')
    const [newNumber,
        setNewNumber] = useState('')
    const [findName,
        findNameInList] = useState('')
    const [message,
        setMessage] = useState(null)
    const [error,
        setError] = useState(null)

    useEffect(() => {
        console.log('effect')
        personService
            .getAll()
            .then(initialPersons => {
                console.log('promise fulfilled')
                setPersons(initialPersons)
            })
    }, [])

    const addNameNumber = (event) => { //function to add new name into phonebook
        event.preventDefault()
        const newObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        personService
            .create(newObject)
            .then(returnedName => {
                setPersons(persons.concat(returnedName))
            })

        const checkName = persons.find(person => person.name === newName)

        const checkNames = (checkName == undefined)
            ? setPersons(persons.concat(newObject))
            : alert(`${newName} is already added to phonebook`)

        setNewName('')
        setNewNumber('')
        findNameInList('')

    }

    const deletePersonFrom = (id) => {
        const result = window.confirm("Confirm delete")
        try {
            if (result) {
                personService
                    .deletePerson(id)
                    .then(setPersons(persons.filter(person => person.id !== id)))
            }

        } catch (error) {
            setError('Error occured')
            setTimeout(() => {
                setMessage(null)
            }, 3000)
        }
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
            <FindPeople findName={findName} handleNameFind={handleNameFind}/>
            <h2>Add a new</h2>
            <AddPeople
                addNameNumber={addNameNumber}
                newName={newName}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                newNumber={newNumber}/>
            <h2>Numbers</h2>

            <People
                persons={persons}
                findName={findName}
                deletePersonFrom={deletePersonFrom}/>
        </div>
    )
}

export default App