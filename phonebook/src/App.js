import React, {useState} from 'react'
import People from './components/People'
import AddPeople from './components/AddPeople'
import FindPeople from './components/FindPeople'

const App = () => {
    const [persons,
        setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-123456',
            id: 1
        }, {
            name: 'Ada Lovelace',
            number: '39-44-5323523',
            id: 2
        }, {
            name: 'Dan Abramov',
            number: '12-43-234345',
            id: 3
        }, {
            name: 'Mary Poppendieck',
            number: '39-23-6423122',
            id: 4
        }
    ]) //initial state of names in phone book
    const [newName,
        setNewName] = useState('')
    const [newNumber,
        setNewNumber] = useState('')
    const [findName,
        findNameInList] = useState('')

    const addNameNumber = (event) => { //function to add new name into phonebook
        event.preventDefault()
        const newObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
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