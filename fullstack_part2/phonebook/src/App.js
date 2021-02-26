import React, {useState, useEffect} from 'react'
import personService from './services/person'
import './index.css'
import People from './components/People'
import AddPeople from './components/AddPeople'
import FindPeople from './components/FindPeople'
import Notification from './components/Notification'


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

        const names = persons.map(person => person.name)

        const checkNames = (names.includes(newName))
        if (checkNames) {
            const result = window.confirm(`${newName} is already added to phonebook. Replace the phone number with the new one?`)
            if (result) {
                const checkName = persons.find(person => person.name === newName)
                checkName.number = newNumber
                personService
                    .update(checkName.id, checkName)
                    .then(returned => {
                        setPersons(persons.map(person => person.id !== returned.id
                            ? person
                            : returned))
                        setMessage(
                                `Updated number for '${newName}'`
                              )
                    })
                    .catch(error => {
                        setError(`${error}`)
                    })
                    setTimeout(() => {
                        setMessage(null)
                        setError(null)
                    }, 5000)
            }

        } else {
            personService
                .create(newObject)
                .then(returnedName => {
                    setPersons(persons.concat(returnedName))
                    setMessage(
                        `Added '${newName}'`
                      )
                })
            setNewName('')
            setNewNumber('')
            findNameInList('')
        }
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
            <Notification message = {message}/>
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